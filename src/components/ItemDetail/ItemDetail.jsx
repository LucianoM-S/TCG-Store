import styles from "./index.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCart } from "../../context/CartContext.jsx"

function ItemDetail({ product }) {
    
    const { addItem } = useCart()

    const handleAdd = (quantity) => { addItem(product, quantity) }
    
    return (
        <div className={styles.detail}>

            <div className={styles.imageContainer}>

                <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                />

            </div>

            <div className={styles.info}>

                <span className={styles.category}>
                    {product.category}
                </span>

                <h1 className={styles.title}>
                    {product.title}
                </h1>

                <p className={styles.description}>
                    {product.description}
                </p>

                <div className={styles.price}>
                    ${product.price}
                </div>

                <div className={styles.stock}>
                    Stock disponible: {product.stock}
                </div>

                <ItemCount
    			stock={product.stock}
   			onAdd={handleAdd}
		/>


            </div>

        </div>
    )
}

export default ItemDetail