import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

export default function MobileMenu() {
    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                    as="a"
                    href="/"
                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                    Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="/"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                    Team
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="/"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                    Projects
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="/"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                    Calendar
                </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">Tom Cook</div>
                        <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                    </div>
                    <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 space-y-1">
                    <Disclosure.Button
                        as="a"
                        href="/"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                        Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="/"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                        Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="/"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                        Sign out
                    </Disclosure.Button>
                </div>
            </div>
        </Disclosure.Panel>
    )
}
