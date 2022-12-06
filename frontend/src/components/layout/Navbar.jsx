// import '../../assets/css/header.css'
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MobileMenu from './form/navbar/MobileMenu.jsx';
import { useSelector } from "react-redux";
import MainMenu from './form/navbar/MainMenu.jsx';
import IsAuthenticated from './form/navbar/IsAuthenticated.jsx';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ title, subTitle }) {
    const state = useSelector(state => state.users)
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="w-full px-4 mx-auto sm:px-6 ">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto mr-2"
                                        src={require('../../assets/images/icons/logo2.png')}
                                        alt="Pet Finder"
                                    />
                                    <h4 className='text-xl'>Pet Finder</h4>
                                </div>

                            </div>
                            {/* -------------------------------------------------------------- */}
                            <MainMenu />
                            {/* -------------------------------------------------------------- */}
                            <div className="hidden sm:ml-6 sm:flex sm:items-center justify-between">
                                <button
                                    type="button"
                                    className="disabled rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                {
                                    state.IsAuthenticated ?
                                        < IsAuthenticated /> :
                                        <Link
                                            to='users/signup'
                                            state={'User SignUp'}
                                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                        >
                                            join now
                                        </Link>
                                }


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
    )
}
