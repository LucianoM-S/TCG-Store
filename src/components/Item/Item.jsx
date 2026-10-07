import styles from "./index.module.css"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext.jsx"

function Item({ product }) {

    const { addItem } = useCart()
    const handleAdd = () => { addItem(product, 1) }

    return (
        <div className={styles.card}>

            <Link
                to={`/item/${product.id}`}
                className={styles.detailLink}
            >
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
            </Link>

            <button
                className={styles.addButton}
                onClick={handleAdd}
            >
                <FaCartShopping />
                Agregar al carrito
            </button>

        </div>
    )
}

export default Item