import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"

function Layout() {

    return (
        <>
            <Navbar/>

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout