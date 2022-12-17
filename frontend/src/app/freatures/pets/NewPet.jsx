import { useCallback } from "react";
import { useFormik } from "formik";
import { reportFormSchema as schema } from "../reports/form/reportFormSchema.jsx";
// import SideInfo from "./form/ui/SideInfo.jsx";
import { Label } from "../../../components/form/Label.jsx";
import { SelectField } from "../../../components/form/SelectField.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { TextAreaField } from "../../../components/form/TextArea.jsx";
import { ErrorField } from "../../../components/form/ErrorField.jsx";
import { Image } from "../../../components/ui/Image.jsx";
import dogPlaceHolder from "../../../assets/images/banner/golden_retriever.jpeg";

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

    const loadImage = useCallback((e) => {
        e.preventDefault();
        avatarRef.current.click();
        const file = avatarRef.current?.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            if (isMounted.current) {
                setImage(objectUrl);
                e.target.src = objectUrl;
            }
        }
    }, []);

    return (
        <div className='rounded-md'>
            <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
                <div className='relative  shadow-xl'>
                    <h2 className='sr-only'>Pet Information</h2>

                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        {/* ---------------------------------------------------- */}
                        <div className='relative overflow-hidden md:rounded-tl-xl md:rounded-bl-xl md:p-5'>
                            <div className='flex flex-col justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                                <div className='_space-y-1 text-center opacity-80'>
                                    <Image
                                        sourceImage={"image"}
                                        fallBackImage={dogPlaceHolder}
                                        alt='dog-placeholder'
                                        className='h-full wh-full'
                                    />
                                </div>
                                <button className='rounded-lg border-orange-500 p-2 bg-slate-200'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6 inline-block text-orange-500'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
                                        />
                                    </svg>
                                    {" upload"}
                                </button>
                            </div>
                        </div>
                        {/* ---------------------------------------------------- */}
                        <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                            <h3 className='text-lg font-medium text-gray-900'>
                                Send us a message
                            </h3>
                            <form
                                name='newPetForm'
                                onSubmit={formik.handleSubmit}
                                onReset={formik.handleReset}
                                className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                            >
                                <div>
                                    <Label
                                        htmlFor={
                                            schema.fields.report_type.attributes
                                                .name
                                        }
                                        className={schema.classes.label}
                                        content={
                                            schema.fields.report_type.label
                                                .content
                                        }
                                    />
                                    <SelectField
                                        name={
                                            schema.fields.report_type.attributes
                                                .name
                                        }
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={formik.values["report_type"]}
                                        options={
                                            schema.fields.report_type.attributes
                                                .options
                                        }
                                        className={schema.classes.input}
                                    />
                                    <ErrorField
                                        error={
                                            formik.errors[
                                                schema.fields.report_type
                                                    .attributes.name
                                            ]
                                        }
                                        touched={
                                            formik.touched[
                                                schema.fields.report_type
                                                    .attributes.name
                                            ]
                                        }
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor={
                                            schema.fields.lost_found_date
                                                .attributes.name
                                        }
                                        className={schema.classes.label}
                                        content={
                                            schema.fields.lost_found_date.label
                                                .content
                                        }
                                    />
                                    <TextField
                                        name={
                                            schema.fields.lost_found_date
                                                .attributes.name
                                        }
                                        type={
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
                                    <ErrorField
                                        error={
                                            formik.errors[
                                                schema.fields.lost_found_date
                                                    .attributes.name
                                            ]
                                        }
                                        touched={
                                            formik.touched[
                                                schema.fields.lost_found_date
                                                    .attributes.name
                                            ]
                                        }
                                    />
                                </div>

                                <div className='sm:col-span-2'>
                                    <Label
                                        htmlFor={
                                            schema.fields.address.attributes
                                                .name
                                        }
                                        className={schema.classes.label}
                                        content={
                                            schema.fields.address.label.content
                                        }
                                    />
                                    <TextField
                                        name={
                                            schema.fields.address.attributes
                                                .name
                                        }
                                        type={
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
                                    <ErrorField
                                        error={
                                            formik.errors[
                                                schema.fields.address.attributes
                                                    .name
                                            ]
                                        }
                                        touched={
                                            formik.touched[
                                                schema.fields.address.attributes
                                                    .name
                                            ]
                                        }
                                    />
                                </div>

                                <div className='sm:col-span-2'>
                                    <Label
                                        htmlFor={
                                            schema.fields.crossroads.attributes
                                                .name
                                        }
                                        className={schema.classes.label}
                                        content={
                                            schema.fields.crossroads.label
                                                .content
                                        }
                                    />
                                    <TextField
                                        name={
                                            schema.fields.crossroads.attributes
                                                .name
                                        }
                                        type={
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
                                    <ErrorField
                                        error={
                                            formik.errors[
                                                schema.fields.crossroads
                                                    .attributes.name
                                            ]
                                        }
                                        touched={
                                            formik.touched[
                                                schema.fields.crossroads
                                                    .attributes.name
                                            ]
                                        }
                                    />
                                </div>

                                <div className='sm:col-span-2'>
                                    <Label
                                        htmlFor={
                                            schema.fields.comment.attributes
                                                .name
                                        }
                                        className={schema.classes.label}
                                        content={
                                            schema.fields.comment.label.content
                                        }
                                    />
                                    <TextAreaField
                                        name={
                                            schema.fields.comment.attributes
                                                .name
                                        }
                                        className={schema.classes.textarea}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        value={
                                            formik.values[
                                                schema.fields.comment.attributes
                                                    .name
                                            ]
                                        }
                                        rows={5}
                                    />
                                    <ErrorField
                                        error={
                                            formik.errors[
                                                schema.fields.comment.attributes
                                                    .name
                                            ]
                                        }
                                        touched={
                                            formik.touched[
                                                schema.fields.comment.attributes
                                                    .name
                                            ]
                                        }
                                    />
                                </div>

                                <div className='sm:col-span-2 sm:flex sm:justify-end'>
                                    <button
                                        type='submit'
                                        className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
                                        // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
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
