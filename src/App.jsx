import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"

function App() {

    const [cart, setCart] = useState([])
    const [cartProductsCounter, setCartProductsCounter] = useState(0)

    const addProductCart = (id, quantity) => {

        setCart([
            ...cart, {id, quantity}
        ])
        setCartProductsCounter(cartProductsCounter + quantity)
    }

    return (
        <Routes>
            <Route element={<Layout cartProductsCounter={cartProductsCounter}/>}>
                <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a TCG Store!" addProductCart={addProductCart}/>}/>
                <Route path="/category/:id" element={<ItemListContainer greeting="Productos" addProductCart={addProductCart}/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer addProductCart={addProductCart}/>}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    )
}

export default App