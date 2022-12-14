import { newPetSchema } from './form/newPetSchema.js';
import { SelectField } from '../../../components/form/SelectField.jsx';
import Select from '../../../components/form/Select.jsx';
import SideInfo from './form/newPet/SideInfo.jsx';
const [formFields, formInitialState, formClasses, formConstrains] =
    newPetSchema();
export default function NewPet() {
    return (
        <div className="rounded-md">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative  shadow-xl">
                    <h2 className="sr-only">Pet Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Contact information */}
                        <SideInfo />

                        {/* Contact form */}
                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">
                                Send us a message
                            </h3>
                            <form
                                action="#"
                                method="POST"
                                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                <div>
                                    <Select />
                                    {/* <SelectField
                                        fieldName="report_type"
                                        fieldClasses={formClasses.input}
                                        label="listing type"
                                        labelClasses={formClasses.label}
                                        // handleChange={}
                                        // handleBlur={}
                                        // value={}
                                        options={['lost', 'found']}
                                        defaultValue="lost"
                                    /> */}
                                    {/* <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Listing Type
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="location"
                                            name="location"
                                            className="peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 pr-10 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                                            defaultValue="Canada"
                                        >
                                            <option className="top-0 left-0">
                                                United States
                                            </option>
                                            <option className="top-0 left-0">
                                                Canada
                                            </option>
                                            <option className="top-0 left-0">
                                                Mexico
                                            </option>
                                        </select>
                                    </div> */}
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Phone
                                        </label>
                                        <span
                                            id="phone-optional"
                                            className="text-sm text-gray-500"
                                        >
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            aria-describedby="phone-optional"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Subject
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Message
                                        </label>
                                        <span
                                            id="message-max"
                                            className="text-sm text-gray-500"
                                        >
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            aria-describedby="message-max"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button
                                        type="submit"
                                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
