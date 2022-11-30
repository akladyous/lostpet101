import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

export default function Layout() {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
