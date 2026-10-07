import styles from "./index.module.css"
import { FaCartShopping } from "react-icons/fa6"

function Item({ product, addProductCart }) {

    return (
        <div className={styles.card}>
	        <img
                src={product.image}
                alt={product.title}
                className={styles.image}
            />
            <span className={styles.category}>
                {product.category}
            </span>
            <h3 className={styles.title}>
                {product.title}
            </h3>
            <p className={styles.description}>
                {product.description}
            </p>
            <div className={styles.footer}>
                <span className={styles.price}>
                    ${product.price}
                </span>
                <span className={styles.stock}>
                    Stock: {product.stock}
                </span>
            </div>
            <button
                className={styles.addButton}
                onClick={() => addProductCart(product.id, 1)}
            >
                <FaCartShopping />
                Agregar al carrito
            </button>
        </div>
    )
}

export default Item