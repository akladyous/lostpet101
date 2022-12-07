import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"

export default function Layout() {

    return (
        <div className="app">
            <Navbar />
            {window.location.pathname !== '/' ? <Header /> : ''}
            <div className="content min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
