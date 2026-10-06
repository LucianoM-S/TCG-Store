import styles from "./index.module.css"
import CartWidget from "../CartWidget/CartWidget.jsx"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <h2>TCG Store</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>Inicio</li>
                <li className={styles.link}>Singles</li>
                <li className={styles.link}>Sellados</li>
                <li className={styles.link}>Accesorios</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar