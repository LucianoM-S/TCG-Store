import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import styles from "./index.module.css"
import ItemList from "../ItemList/ItemList.jsx"
import { getProducts } from "../../mock/asyncMock.js"

function ItemListContainer({ greeting, addProductCart }) {

    const { id } = useParams()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                setLoading(true)
                setError(null)

                const products = await getProducts()

                if (id) {

                    const filteredProducts = products.filter(
                        (product) =>
                            product.category.toLowerCase() === id.toLowerCase()
                    )

                    setItems(filteredProducts)

                } else {

                    setItems(products)

                }

            } catch (error) {

                console.error(
                    "Error al cargar los productos:",
                    error
                )

                setError(
                    "No se pudieron cargar los productos."
                )

            } finally {

                setLoading(false)

            }
        }

        fetchProducts()

    }, [id])

    if (loading) {
        return (
            <div className={styles.message}>
                <p>Cargando productos...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.message}>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>

            <h1>{greeting}</h1>

            {id && (
                <h2 className={styles.categoryTitle}>
                    Categoría: {id}
                </h2>
            )}

            {items.length > 0 ? (

                <ItemList
                    products={items}
                    addProductCart={addProductCart}
                />

            ) : (

                <div className={styles.message}>
                    <p>
                        No hay productos disponibles en esta categoría.
                    </p>
                </div>

            )}

        </div>
    )
}

export default ItemListContainer