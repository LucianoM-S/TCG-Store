import { useEffect, useState } from "react"
import styles from "./index.module.css"
import { getProductById } from "../../services/getProductById.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

function ItemDetailContainer({ productId, addProductCart }) {

    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        getProductById(productId)
            .then((product) => {
                setProduct(product)
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })

    }, [productId])

    if (error) {
        return (
            <div className={styles.error}>
                <p>{error}</p>
            </div>
        )
    }

    if (!product) {
        return (
            <div className={styles.loading}>
                <p>Cargando producto...</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <ItemDetail
                product={product}
                addProductCart={addProductCart}
            />
        </div>
    )
}

export default ItemDetailContainer