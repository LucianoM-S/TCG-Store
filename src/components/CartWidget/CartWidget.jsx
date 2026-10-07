import styles from "./index.module.css"
import { FaCartShopping } from "react-icons/fa6"

function CartWidget({ cartProductsCounter }) {
    return (
        <div className={styles.widget}>
            <FaCartShopping />
            {cartProductsCounter > 0 && (
                <span className={styles.cartBadge}>
                    {cartProductsCounter}
                </span>
            )}
        </div>
    )
}

export default CartWidget