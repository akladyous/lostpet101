import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from '../../../../components/ui/Image.jsx';
import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import avatarPlaceholder from '../../../../assets/images/icons/avatarPlaceholder.png';

export default function MobileMenu() {
  const state = useSelector((state) => state.users);

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-3">
        <Disclosure.Button
          as={Link}
          to="stories"
          state={{ title: 'Our stories' }}
          className="block border-l-4 border-orange-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-orange-700"
        >
          Stories
        </Disclosure.Button>
        <Disclosure.Button
          as={Link}
          to="/listings"
          state={{ title: 'Lost & found Pet' }}
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Lost & Found
        </Disclosure.Button>
        <Disclosure.Button
          as={Link}
          to="/listings/new"
          state={{ title: 'Report Lost & Found' }}
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Report Lost Pet
        </Disclosure.Button>
        <Disclosure.Button
          as={Link}
          to="/about"
          state={{ title: 'About Us' }}
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          About Us
        </Disclosure.Button>
        <Disclosure.Button
          as={Link}
          to="/feedback"
          state={{ title: 'Contact Us' }}
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Feedback
        </Disclosure.Button>
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        {/* --------------------------- isAuthenticated -------------------------------------------- */}
        {state.isAuthenticated ? (
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <Image
                sourceImage={state.user?.photo_url}
                fallBackImage={avatarPlaceholder}
                alt="user-avatar"
                className="h-9 w-9 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                {state.user.email}
              </div>
            </div>
            <button
              type="button"
              className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <></>
        )}
        {/* --------------------------- isAuthenticated -------------------------------------------- */}
        {state.isAuthenticated ? (
          <div className="mt-3 space-y-1">
            <Disclosure.Button
              as="button"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              disabled
            >
              Your Profile
            </Disclosure.Button>
            <Disclosure.Button
              as="button"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              disabled
            >
              Settings
            </Disclosure.Button>
            <Disclosure.Button
              as={Link}
              to="users/signout"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign out
            </Disclosure.Button>
            {/* ------------------------------------------------------------------------------------- */}
          </div>
        ) : (
          <div className="mt-3 space-y-1">
            <Disclosure.Button
              as={Link}
              to="users/signup"
              state={'User SignUp'}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign Up
            </Disclosure.Button>
            <Disclosure.Button
              as={Link}
              to="users/signin"
              state={'User SignUp'}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign In
            </Disclosure.Button>
          </div>
        )}
      </div>
    </Disclosure.Panel>
  );
}
