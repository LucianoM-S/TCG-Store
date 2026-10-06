import styles from "./index.module.css"
import { FaCartShopping } from "react-icons/fa6";


function CartWidget({}){
    return(
        <div className={styles.widget}>
            <FaCartShopping/>
            <span>0</span>
        </div>
    )
}

export default CartWidget