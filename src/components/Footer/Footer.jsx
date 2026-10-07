import styles from "./index.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.content}>

                <div className={styles.section}>
                    <h3>TCG Store</h3>
                    <p>
                        Tu tienda de productos de Trading Card Game.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4>Categorías</h4>
                    <ul>
                        <li>Singles</li>
                        <li>Sellados</li>
                        <li>Accesorios</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Información</h4>
                    <ul>
                        <li>Productos</li>
                        <li>Carrito</li>
                        <li>Contacto</li>
                    </ul>
                </div>

            </div>

            <div className={styles.bottom}>
                <p>
                    © 2026 TCG Store - Todos los derechos reservados.
                </p>
            </div>

        </footer>
    )
}

export default Footer