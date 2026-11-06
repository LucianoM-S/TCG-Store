import {
    collection,
    doc,
    runTransaction,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/config.js";

export async function createOrder({ user, buyer, cart }) {
    if (!user?.uid) {
        throw new Error("Debés iniciar sesión para comprar.");
    }

    if (!Array.isArray(cart) || cart.length === 0) {
        throw new Error("No podés generar una orden con el carrito vacío.");
    }

    const orderRef = doc(collection(db, "orders"));

    await runTransaction(db, async (transaction) => {
        const productsToUpdate = [];

        for (const product of cart) {
            const quantity = Number(product.quantity);

            if (
                !product.id ||
                !Number.isSafeInteger(quantity) ||
                quantity < 1
            ) {
                throw new Error("Hay un producto con cantidad inválida.");
            }

            const productRef = doc(
                db,
                "products",
                String(product.id)
            );

            const snapshot = await transaction.get(productRef);

            if (!snapshot.exists()) {
                throw new Error(
                    `El producto ${product.title} ya no existe.`
                );
            }

            const productData = snapshot.data();
            const stock = Number(productData.stock);
            const price = Number(productData.price);

            if (!Number.isSafeInteger(stock) || stock < 0) {
                throw new Error("El stock del producto es inválido.");
            }

            if (stock < quantity) {
                throw new Error(
                    `Stock insuficiente para ${productData.title}. Disponible: ${stock}.`
                );
            }

            if (!Number.isFinite(price) || price < 0) {
                throw new Error("El precio del producto es inválido.");
            }

            productsToUpdate.push({
                ref: productRef,
                stock,
                quantity,
                title: productData.title,
                price,
            });
        }

        const items = productsToUpdate.map((product) => ({
            productId: product.ref.id,
            title: product.title,
            unitPrice: product.price,
            quantity: product.quantity,
            subtotal: product.price * product.quantity,
        }));

        const total = items.reduce(
            (sum, item) => sum + item.subtotal,
            0
        );

        const order = {
            userId: user.uid,
            userEmail: user.email,
            buyer: {
                name: buyer.name.trim(),
                phone: buyer.phone.trim(),
                address: buyer.address.trim(),
                city: buyer.city.trim(),
                notes: buyer.notes.trim(),
            },
            items,
            total,
            createdAt: serverTimestamp(),
        };

        for (const product of productsToUpdate) {
            transaction.update(product.ref, {
                stock: product.stock - product.quantity,
            });
        }

        transaction.set(orderRef, order);
    });

    return orderRef.id;
}
