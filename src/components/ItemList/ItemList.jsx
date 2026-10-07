import styles from "./index.module.css"
import Item from "../Item/Item.jsx"

function ItemList({ products, addProductCart }) {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                    addProductCart={addProductCart}
                />
            ))}
        </div>
    )
}

export default ItemList