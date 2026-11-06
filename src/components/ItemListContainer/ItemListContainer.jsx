import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./index.module.css";
import ItemList from "../ItemList/ItemList.jsx";
import { getProducts } from "../../services/products.js";

function ItemListContainer({ greeting }) {
    const { id } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        async function fetchProducts() {
            try {
                setLoading(true);
                setError(null);

                const products = await getProducts(id);

                if (active) {
                    setItems(products);
                }
            } catch (err) {
                console.error("Error al cargar productos:", err);

                if (active) {
                    setError("No se pudieron cargar los productos. Intentá nuevamente.");
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        }

        fetchProducts();

        return () => {
            active = false;
        };
    }, [id]);

    if (loading) {
        return (
            <div className={styles.message}>
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.message}>
                <p>{error}</p>
            </div>
        );
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
                <ItemList products={items} />
            ) : (
                <div className={styles.message}>
                    <p>No hay productos disponibles en esta categoría.</p>
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;