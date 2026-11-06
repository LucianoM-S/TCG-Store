import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity = 1) => {
        setCart((prev) => {
            const existingItem = prev.find(
                (product) => product.id === item.id
            );

            const currentQuantity = existingItem
                ? existingItem.quantity
                : 0;

            const stock = Number(item.stock);
            const requestedQuantity = Number(quantity);

            if (
                !Number.isInteger(requestedQuantity) ||
                requestedQuantity < 1 ||
                !Number.isFinite(stock) ||
                stock < 0
            ) {
                return prev;
            }

            // No permitir superar el stock disponible.
            if (currentQuantity + requestedQuantity > stock) {
                return prev;
            }

            if (existingItem) {
                return prev.map((product) =>
                    product.id === item.id
                        ? {
                            ...product,
                            quantity:
                                product.quantity + requestedQuantity,
                        }
                        : product
                );
            }

            return [
                ...prev,
                {
                    ...item,
                    quantity: requestedQuantity,
                },
            ];
        });
    };

    const removeItem = (itemId) => {

        setCart((prev) =>
            prev.filter(
                (product) => product.id !== itemId
            )
        )
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(
            (product) => product.id === id
        )
    }

    const totalItems = cart.reduce(
        (total, product) => total + product.quantity,
        0
    )

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    )

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                isInCart,
                totalItems,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}