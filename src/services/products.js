import {
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
} from "firebase/firestore";

import { db } from "../firebase/config.js";

const productsCollection = collection(db, "products");

export async function getProducts(categoryId) {
    const productsQuery = categoryId
        ? query(
              productsCollection,
              where("category", "==", categoryId.toLowerCase())
          )
        : productsCollection;

    const snapshot = await getDocs(productsQuery);

    return snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
    }));
}

export async function getProductById(productId) {
    const productRef = doc(db, "products", productId);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado.");
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
}