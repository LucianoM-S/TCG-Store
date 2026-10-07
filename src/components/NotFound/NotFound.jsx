import { Link } from "react-router-dom"
import styles from "./index.module.css"

function NotFound() {

    return (
        <div className={styles.container}>

            <h1>404</h1>

            <h2>Página no encontrada</h2>

            <p>
                La página que estás buscando no existe.
            </p>

            <Link
                to="/"
                className={styles.button}
            >
                Volver al inicio
            </Link>

        </div>
    )
}

export default NotFound