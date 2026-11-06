import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./index.module.css";
import { getProductById } from "../../services/products.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

function ItemDetailContainer() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        async function fetchProduct() {
            try {
                setLoading(true);
                setProduct(null);
                setError(null);

                const result = await getProductById(id);

                if (active) {
                    setProduct(result);
                }
            } catch (err) {
                console.error("Error al cargar el producto:", err);

                if (active) {
                    setError(err.message || "No se pudo cargar el producto.");
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        }

        fetchProduct();

        return () => {
            active = false;
        };
    }, [id]);

    if (loading) {
        return (
            <div className={styles.loading}>
                <p>Cargando producto...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;