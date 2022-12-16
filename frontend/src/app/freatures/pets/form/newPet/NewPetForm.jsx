import { useCallback } from 'react';
import { useFormik, Field } from 'formik';
import { reportFormSchema as schema } from '../reports/form/reportFormSchema.js';
import { SelectField } from '../../../components/form/SelectField.jsx';
import { TextField } from '../../../components/form/TextField.jsx';
import SideInfo from './form/newPet/SideInfo.jsx';
import InputField from '../../../components/form/InputField.jsx';
import Label from '../../../components/form/Label.jsx';

export default function NewPetForm() {
    const handleSubmit = useCallback(async (values, actions) => {
        debugger;
    }, []);

    const formik = useFormik({
        initialValues: schema.initialValues,
        onSubmit: handleSubmit,
        // onReset: (values, actions) => {},
        validationSchema: schema.validations,
        validateOnChange: false,
    });

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
                                <div>
                                    <Label
                                        htmlFor={
                                            schema.fields.report_type.attributes
                                                .name
                                        }
                                        className={schema.classes.input}
                                        content={
                                            schema.fields.report_type.label
                                                .content
                                        }
                                        caption={
                                            schema.fields.report_type.label
                                                ?.caption
                                        }
                                    />
                                    <SelectField
                                        name={
                                            schema.fields.report_type.attributes
                                                .name
                                        }
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={formik.values['report_type']}
                                        options={
                                            schema.fields.report_type.attributes
                                                .options
                                        }
                                        className={schema.classes.input}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor={
                                            schema.fields.lost_found_date
                                                .attributes.name
                                        }
                                        className={schema.classes.input}
                                        content={
                                            schema.fields.lost_found_date.label
                                                .content
                                        }
                                        caption={
                                            schema.fields.lost_found_date.label
                                                ?.caption
                                        }
                                    />
                                    <TextField
                                        name={
                                            schema.fields.lost_found_date
                                                .attributes.name
                                        }
                                        fieldType={
                                            schema.fields.lost_found_date
                                                .attributes.type
                                        }
                                        className={schema.classes.input}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={
                                            formik.values[
                                                schema.fields.lost_found_date
                                                    .attributes.name
                                            ]
                                        }
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <Label
                                        htmlFor={
                                            schema.fields.address.attributes
                                                .name
                                        }
                                        className={schema.classes.input}
                                        content={
                                            schema.fields.address.label.content
                                        }
                                        caption={
                                            schema.fields.address.label?.caption
                                        }
                                    />
                                    <TextField
                                        name={
                                            schema.fields.address.attributes
                                                .name
                                        }
                                        fieldType={
                                            schema.fields.address.attributes
                                                .type
                                        }
                                        className={schema.classes.input}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={
                                            formik.values[
                                                schema.fields.address.attributes
                                                    .name
                                            ]
                                        }
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <Label
                                        htmlFor={
                                            schema.fields.crossroads.attributes
                                                .name
                                        }
                                        className={schema.classes.input}
                                        content={
                                            schema.fields.crossroads.label
                                                .content
                                        }
                                        caption={
                                            schema.fields.crossroads.label
                                                ?.caption
                                        }
                                    />
                                    <TextField
                                        name={
                                            schema.fields.crossroads.attributes
                                                .name
                                        }
                                        fieldType={
                                            schema.fields.crossroads.attributes
                                                .type
                                        }
                                        className={schema.classes.input}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={
                                            formik.values[
                                                schema.fields.crossroads
                                                    .attributes.name
                                            ]
                                        }
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <TextField
                                        fieldName={schema.fields.comment.name}
                                        fieldType={schema.fields.comment.type}
                                        label={
                                            schema.fields.comment.label.value
                                        }
                                        labelInfo={'Max. 500 characters'}
                                        fieldClasses={schema.classes.input}
                                        labelClasses={schema.classes.label}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={formik.values['comment']}
                                        rows={5}
                                    />

                                    {/* <div className="flex justify-between">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            comment
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
                                    </div> */}
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
