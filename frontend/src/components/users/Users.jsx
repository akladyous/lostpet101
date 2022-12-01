import { Outlet } from "react-router-dom"

export default function Users() {
    return (
        <div className="users min-vh-100">
            <Outlet />
        </div>
    )
}
