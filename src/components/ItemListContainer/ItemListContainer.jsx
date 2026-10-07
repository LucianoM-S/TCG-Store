import { useEffect, useState } from "react"
import styles from "./index.module.css"
import ItemList from "../ItemList/ItemList.jsx"
import { getProducts } from "../../mock/asyncMock.js"

function ItemListContainer({ greeting, addProductCart }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts()
                setItems(products)
            } catch (error) {
                console.error("Error al cargar los productos:", error)
            }
        }
        fetchProducts()
    }, [])
    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <ItemList
                products={items}
                addProductCart={addProductCart}
            />
        </div>
    )
}

export default ItemListContainer