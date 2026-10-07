import { Link } from "react-router-dom" 
import styles from "./index.module.css" 
import { useCart } from "../../context/CartContext.jsx"

function Cart() { 
	const { cart, removeItem, clear, totalPrice } = useCart() 
	if (cart.length === 0) { 
		return ( 
			<div className={styles.emptyCart}> 
				<h1>Tu carrito está vacío</h1> 
				<p> ¡Explorá nuestros productos y encontrá tus próximos favoritos! </p> 
				<Link to="/" className={styles.button} > Ver productos </Link> 
			</div> 
		) 
	} 
	return ( 
		<div className={styles.container}> 
			<h1>Carrito de compras</h1> 
			<div className={styles.products}> 
				{cart.map((product) => { 
					const subtotal = product.price * product.quantity 
					return ( 
						<div key={product.id} className={styles.product} > 
							<img src={product.image} alt={product.title} className={styles.image} /> 
							<div className={styles.info}> 
								<h2> {product.title} </h2> 
								<p> Precio unitario: ${product.price} </p> 
								<p> Cantidad: {product.quantity} </p> 
								<strong> Subtotal: ${subtotal} </strong> 
							</div> 
							<button className={styles.removeButton} onClick={() => removeItem(product.id) } >
							 	Eliminar
							</button> 
						</div> 
					) 
				})} 
			</div> 
			<div className={styles.summary}> 
				<h2> Total: ${totalPrice} </h2> 
				<div className={styles.actions}> 
					<button className={styles.clearButton} onClick={clear} > 
						Vaciar carrito 
					</button> 
					<button className={styles.checkoutButton} > 
						Finalizar compra 
					</button> 
				</div> 
			</div> 
		</div> 
	) 
} 

export default Cart