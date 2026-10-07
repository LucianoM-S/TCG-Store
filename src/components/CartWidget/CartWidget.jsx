import styles from "./index.module.css"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom" 
import { useCart } from "../../context/CartContext.jsx"

function CartWidget() {

    const { totalItems } = useCart()

    return (
        <Link to="/cart" className={styles.widget}>
            <FaCartShopping />

            {totalItems > 0 && (
                <span className={styles.cartBadge}>
                    {totalItems}
                </span>
            )}
        </Link>
    )
}

export default CartWidget