import { useState } from "react"
import styles from "./index.module.css"

function ItemCount({ stock, onAdd }) {

    const [quantity, setQuantity] = useState(0)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.counter}>

                <button
                    onClick={decrement}
                    disabled={quantity === 0}
                >
                    -
                </button>

                <span>{quantity}</span>

                <button
                    onClick={increment}
                    disabled={quantity === stock}
                >
                    +
                </button>

            </div>

            <p>
                Stock disponible: {stock}
            </p>

            <button
                className={styles.confirmButton}
                onClick={() => onAdd(quantity)}
                disabled={quantity === 0}
            >
                Agregar {quantity} al carrito
            </button>

        </div>
    )
}

export default ItemCount