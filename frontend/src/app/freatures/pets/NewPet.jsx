import { useCallback } from 'react';
import { useFormik } from 'formik';
import { newPetSchema } from './form/newPetSchema.js';
// import Select from '../../../components/form/Select.jsx';
import { SelectField } from '../../../components/form/SelectField.jsx';
import SideInfo from './form/newPet/SideInfo.jsx';

const [formFields, formInitialState, formClasses, formConstrains] =
    newPetSchema();

export default function NewPet() {
    const handleSubmit = useCallback(async (values, actions) => {
        debugger;
    }, []);

    const formik = useFormik({
        initialValues: formInitialState,
        onSubmit: handleSubmit,
        // onReset: (values, actions) => {},
        // validationSchema: formConstrains,
        validateOnChange: false,
    });
    // debugger;
    return (
        <div className="rounded-md">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative  shadow-xl">
                    <h2 className="sr-only">Pet Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <SideInfo />

                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">
                                Send us a message
                            </h3>
                            <form
                                name="newPetForm"
                                onSubmit={formik.handleSubmit}
                                onReset={formik.handleReset}
                                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                {/* ----------------------------------------------- */}
                                <div>
                                    <SelectField
                                        fieldName="report_type"
                                        fieldClasses={formClasses.input}
                                        label="listing type"
                                        labelClasses={formClasses.label}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={formik.values['report_type']}
                                        options={formFields[0].input.options}
                                        defaultValue="select"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="last seen"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        last seen
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="date"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                {/* ----------------------------------------------- */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
