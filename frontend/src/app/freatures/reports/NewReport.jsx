import { useCallback } from "react";
import { useFormik } from "formik";
import { reportFormSchema as schema } from "./form/reportFormSchema.jsx";
import SideInfo from "./form/ui/SideInfo.jsx";
import { Label } from "../../../components/form/Label.jsx";
import { SelectField } from "../../../components/form/SelectField.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { TextAreaField } from "../../../components/form/TextArea.jsx";
import { ErrorField } from "../../../components/form/ErrorField.jsx";

export default function newReport() {
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
    <section className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
      <h3 className='text-lg font-medium text-gray-900'>Send us a message</h3>
      <form
        name='newPetForm'
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
      >
        <div>
          <Label
            htmlFor={schema.fields.report_type.attributes.name}
            className={schema.classes.label}
            content={schema.fields.report_type.label.content}
          />
          <SelectField
            name={schema.fields.report_type.attributes.name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values["report_type"]}
            options={schema.fields.report_type.attributes.options}
            className={schema.classes.input}
          />
          <ErrorField
            error={formik.errors[schema.fields.report_type.attributes.name]}
            touched={formik.touched[schema.fields.report_type.attributes.name]}
          />
        </div>

        <div>
          <Label
            htmlFor={schema.fields.lost_found_date.attributes.name}
            className={schema.classes.label}
            content={schema.fields.lost_found_date.label.content}
          />
          <TextField
            name={schema.fields.lost_found_date.attributes.name}
            type={schema.fields.lost_found_date.attributes.type}
            className={schema.classes.input}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values[schema.fields.lost_found_date.attributes.name]}
          />
          <ErrorField
            error={formik.errors[schema.fields.lost_found_date.attributes.name]}
            touched={
              formik.touched[schema.fields.lost_found_date.attributes.name]
            }
          />
        </div>

        <div className='sm:col-span-2'>
          <Label
            htmlFor={schema.fields.address.attributes.name}
            className={schema.classes.label}
            content={schema.fields.address.label.content}
          />
          <TextField
            name={schema.fields.address.attributes.name}
            type={schema.fields.address.attributes.type}
            className={schema.classes.input}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values[schema.fields.address.attributes.name]}
          />
          <ErrorField
            error={formik.errors[schema.fields.address.attributes.name]}
            touched={formik.touched[schema.fields.address.attributes.name]}
          />
        </div>

        <div className='sm:col-span-2'>
          <Label
            htmlFor={schema.fields.crossroads.attributes.name}
            className={schema.classes.label}
            content={schema.fields.crossroads.label.content}
          />
          <TextField
            name={schema.fields.crossroads.attributes.name}
            type={schema.fields.crossroads.attributes.type}
            className={schema.classes.input}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values[schema.fields.crossroads.attributes.name]}
          />
          <ErrorField
            error={formik.errors[schema.fields.crossroads.attributes.name]}
            touched={formik.touched[schema.fields.crossroads.attributes.name]}
          />
        </div>

        <div className='sm:col-span-2'>
          <Label
            htmlFor={schema.fields.comment.attributes.name}
            className={schema.classes.label}
            content={schema.fields.comment.label.content}
          />
          <TextAreaField
            name={schema.fields.comment.attributes.name}
            className={schema.classes.textarea}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values[schema.fields.comment.attributes.name]}
            rows={5}
          />
          <ErrorField
            error={formik.errors[schema.fields.comment.attributes.name]}
            touched={formik.touched[schema.fields.comment.attributes.name]}
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
    </section>
  );
}
