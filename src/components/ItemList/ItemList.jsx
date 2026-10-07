import styles from "./index.module.css"
import Item from "../Item/Item.jsx"

function ItemList({ products, addProductCart, onSelectProduct }) {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                    addProductCart={addProductCart}
                    onSelectProduct={onSelectProduct}
                />
            ))}
        </div>
    )
}

export default ItemList