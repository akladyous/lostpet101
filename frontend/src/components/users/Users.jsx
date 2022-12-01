import { Outlet } from "react-router-dom"

export default function Users() {
    return (
        <div className="users h-100 bg-light">
            <Outlet />
        </div>
    )
}
