import { Link } from 'react-router-dom';
export default function MainMenu() {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
      <Link
        to="pets"
        state={{ title: 'Our stories' }}
        className="inline-flex items-center border-b-2 border-orange-500 px-1 pt-1 text-sm font-medium text-gray-900"
      >
        Stories
      </Link>
      <Link
        to="/reports"
        state={{ title: 'Lost & found Pet' }}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Lost & Found
      </Link>
      <Link
        to="/reports/new"
        state={{ title: 'Report Lost & Found' }}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Report Lost Pet
      </Link>
      <Link
        to="/about"
        state={{ title: 'About Us' }}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        About Us
      </Link>
      <Link
        to="/feedback"
        state={{ title: 'Contact Us' }}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Feedback
      </Link>
    </div>
  );
}
