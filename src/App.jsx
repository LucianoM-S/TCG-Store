import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import { useState } from "react"

function App() {

    const [cart, setCart] = useState([])
    const [cartProductsCounter, setCartProductsCounter] = useState(0)
    const [selectedProductId, setSelectedProductId] = useState(1)
    
    const addProductCart = (id, quantity) => {
        setCart([...cart, { id, quantity }])
        setCartProductsCounter(cartProductsCounter + quantity)
    }

    return (
        <>
            <Navbar cartProductsCounter={cartProductsCounter} />
            <ItemListContainer greeting="¡Bienvenidos a TCG Store!" addProductCart={addProductCart} onSelectProduct={setSelectedProductId}/>
	        <ItemDetailContainer productId={selectedProductId} addProductCart={addProductCart}/>
            <Footer />
        </>
    )
}

export default App