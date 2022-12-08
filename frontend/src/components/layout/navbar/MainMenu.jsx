
export default function MainMenu() {
    return (
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
            <a
                href="/"
                className="inline-flex items-center border-b-2 border-orange-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
                Testimonials
            </a>
            <a
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
                Lost & Found
            </a>
            <a
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
                Report Lost Pet
            </a>
            <a
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
                About Us
            </a>
            <a
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
                Contact Us
            </a>
        </div>
    )
}
