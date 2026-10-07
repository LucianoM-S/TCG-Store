import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import styles from "./index.module.css"
import { getProductById } from "../../services/getProductById.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

function ItemDetailContainer() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        setProduct(null)
        setError(null)

        getProductById(Number(id))
            .then((product) => {
                setProduct(product)
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })

    }, [id])

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

            <ItemDetail product={product}/>

        </div>
    )
}

export default ItemDetailContainer