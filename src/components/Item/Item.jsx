import styles from "./index.module.css"
import { FaCartShopping } from "react-icons/fa6"

function Item({ product, addProductCart, onSelectProduct }) {

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
            <div className={styles.footer}>
                <span className={styles.price}>
                    ${product.price}
                </span>
            </div>
            <button
                className={styles.detailButton}
                onClick={() => onSelectProduct(product.id)}
            >
                Ver detalle
            </button>
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