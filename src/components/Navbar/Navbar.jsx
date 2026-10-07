import styles from "./index.module.css"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <h2>TCG Store</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <NavLink to="/">
                        Inicio
                    </NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink to="/category/singles">
                        Singles
                    </NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink to="/category/sellados">
                        Sellados
                    </NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink to="/category/accesorios">
                        Accesorios
                    </NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar