import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import MainMenu from './MainMenu.jsx';
import MobileMenu from './MobileMenu.jsx';
import IsAuthenticated from './IsAuthenticated.jsx';
// import { getImageUrl } from '../../../../lib/util.jsx';
import logo from '../../../../assets/images/icons/logo.png?inline';

export default function Navbar() {
  const state = useSelector((state) => state.users);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-4 sm:px-6 ">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="mr-2 block h-9 w-auto"
                    src={logo}
                    alt="Pet Finder"
                  />
                  <Link to="/" className="p-0">
                    <h4 className="text-xl">Pet Finder</h4>
                  </Link>
                </div>
              </div>
              <MainMenu />
              <div className="hidden justify-between sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="disabled rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {state.isAuthenticated ? (
                  <IsAuthenticated />
                ) : (
                  <Link
                    to="users/signup"
                    state={'User SignUp'}
                    className="ml-3 inline-flex items-center rounded-full border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    join now
                  </Link>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <MobileMenu />
        </>
      )}
    </Disclosure>
  );
}
