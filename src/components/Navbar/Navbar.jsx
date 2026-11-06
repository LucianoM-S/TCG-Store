import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

function Navbar() {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    const [logoutError, setLogoutError] = useState("");

    async function handleLogout() {
        setLogoutError("");

        try {
            await logout();
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            setLogoutError(
                "No se pudo cerrar la sesión. Intentá nuevamente."
            );
        }
    }

    return (
        <header>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.brand}>
                    <h2>TCG Store</h2>
                </Link>

                <ul className={styles.links}>
                    <li className={styles.link}>
                        <NavLink to="/">Inicio</NavLink>
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

                <div className={styles.account}>
                    {!loading && (
                        user ? (
                            <>
                                <span className={styles.userEmail}>
                                    {user.email}
                                </span>

                                <button
                                    type="button"
                                    className={styles.authButton}
                                    onClick={handleLogout}
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className={styles.authLink}
                                >
                                    Iniciar sesión
                                </Link>

                                <Link
                                    to="/register"
                                    className={styles.authButton}
                                >
                                    Registrarse
                                </Link>
                            </>
                        )
                    )}

                    <CartWidget />
                </div>
            </nav>

            {logoutError && (
                <p className={styles.logoutError} role="alert">
                    {logoutError}
                </p>
            )}
        </header>
    );
}

export default Navbar;