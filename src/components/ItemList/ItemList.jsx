import styles from "./index.module.css"
import Item from "../Item/Item.jsx"

function ItemList({ products }) {

    return (
        <div className={styles.products}>

            {products.map((product) => (
                <Item key={product.id} product={product}/>
            ))}

        </div>
    )
}

export default ItemList