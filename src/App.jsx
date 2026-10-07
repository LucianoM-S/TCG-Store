import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import Cart from "./components/Cart/Cart.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"

function App() {

    return (
        <Routes>
            <Route element={ <Layout/> }>
                <Route path="/" element={ <ItemListContainer greeting="¡Bienvenidos a TCG Store!"/> } />
                <Route path="/category/:id" element={ <ItemListContainer greeting="Productos"/> } />
                <Route path="/item/:id" element={ <ItemDetailContainer /> } />
		        <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App