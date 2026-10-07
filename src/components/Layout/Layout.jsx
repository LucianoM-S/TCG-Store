import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"

function Layout({ cartProductsCounter }) {

    return (
        <>
            <Navbar cartProductsCounter={cartProductsCounter} />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout