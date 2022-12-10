import '../../assets/css/header.css'

export default function Header({ title, subTitle }) {
    return (
        <div className="header-area mb-4">
            <div className="container text-center">
                <h2 className="display-4 text-light py-3">
                    {title || "Lost & Found Pets"}
                </h2>
                <p className="text-white fs-5 py-3">
                    {subTitle || "Search Lost & Found pets in your area"}
                </p>
            </div>
        </div>
    )
}
