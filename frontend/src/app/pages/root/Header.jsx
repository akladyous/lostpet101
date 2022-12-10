import { useLocation } from "react-router-dom"

export default function Header(params) {
    const { state } = useLocation()

    return (
        <div className="w-full bg-header-image bg-cover bg-bottom bg-no-repeat h-24 md:h-60">
            <div className="flex h-full justify-center align-middle">
                <h1 className="text-2xl md:text-5xl text-slate-50 font-medium m-auto">
                    {state || "Lost & Found Pets"}
                </h1>
                {/* <p className="text-white fs-5 py-3">
                    {subTitle || "Search Lost & Found pets in your area"}
                </p> */}
            </div>
        </div>
    )
}
