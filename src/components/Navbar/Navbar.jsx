import styles from "./index.module.css"
import CartWidget from "../CartWidget/CartWidget.jsx"

function Navbar({ cartProductsCounter }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <h2>TCG Store</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.link}>
                    <a href="/singles">Singles</a>
                </li>
                <li className={styles.link}>
                    <a href="/sellados">Sellados</a>
                </li>
                <li className={styles.link}>
                    <a href="/accesorios">Accesorios</a>
                </li>
            </ul>
            <CartWidget cartProductsCounter={cartProductsCounter} />
        </nav>
    )
}

export default Navbar