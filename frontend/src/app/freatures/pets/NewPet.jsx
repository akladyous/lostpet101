import { useCallback, useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { petFormSchema as schema } from "./form/petFormSchema.jsx";
import { Label } from "../../../components/form/Label.jsx";
import { SelectField } from "../../../components/form/SelectField.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { TextAreaField } from "../../../components/form/TextArea.jsx";
import { ErrorField } from "../../../components/form/ErrorField.jsx";
import { Container } from "../../../components/ui/Container.jsx";
import dogPlaceHolder from "../../../assets/images/banner/golden_retriever.jpeg";
import PetImageLoader from "./form/PetImageLoader.jsx";

export default function NewPetForm() {
  const petInputImageRef = useRef();
  const isMounted = useRef(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
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

  const loadImage = useCallback((event) => {
    event.preventDefault();
    petInputImageRef.current.click();
    const file = petInputImageRef.current?.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      if (isMounted.current) {
        setImage(objectUrl);
        event.target.src = objectUrl;
      }
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;

    return function () {
      isMounted.current = false;
    };
  }, [image]);
  return (
    <>
      <PetImageLoader
        open={open}
        setOpen={setOpen}
        // image={image}
        // setImage={setImage}
        // loadImage={loadImage}
      />
      <section className={"my-16 mx-5 rounded-2xl bg-white md:col-span-2"}>
        {/* <h3 className='text-lg font-medium text-gray-900'>Pet Information</h3> */}
        {/* <PetImage /> */}
        <div className='w-1/3'></div>
        <form
          name='newPetForm'
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
          className='mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8 md:grid-cols-3'
        >
          <input
            ref={petInputImageRef}
            id='image'
            type='file'
            name='image'
            title='upload Pet image'
            accept='image/*'
            multiple={false}
            className='hidden'
            onChange={(e) => {
              loadImage(e);
              formik.handleChange(e);
              formik.setFieldValue("avatar", e.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
          <div className=''>
            <Label
              htmlFor={schema.fields.name.attributes.name}
              className={schema.classes.label}
              content={schema.fields.name.label.content}
            />
            <TextField
              name={schema.fields.name.attributes.name}
              type={schema.fields.name.attributes.type}
              className={schema.classes.input}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.name.attributes.name]}
            />
            <ErrorField
              error={formik.errors[schema.fields.name.attributes.name]}
              touched={formik.touched[schema.fields.name.attributes.name]}
            />
          </div>
          <div className=''>
            <Label
              htmlFor={schema.fields.breed.attributes.name}
              className={schema.classes.label}
              content={schema.fields.breed.label.content}
            />
            <TextField
              name={schema.fields.breed.attributes.name}
              type={schema.fields.breed.attributes.type}
              className={schema.classes.input}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.breed.attributes.name]}
            />
            <ErrorField
              error={formik.errors[schema.fields.breed.attributes.name]}
              touched={formik.touched[schema.fields.breed.attributes.name]}
            />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.color.attributes.name}
              className={schema.classes.label}
              content={schema.fields.color.label.content}
            />
            <TextField
              name={schema.fields.color.attributes.name}
              type={schema.fields.color.attributes.type}
              className={schema.classes.input}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.color.attributes.name]}
            />
            <ErrorField
              error={formik.errors[schema.fields.color.attributes.name]}
              touched={formik.touched[schema.fields.color.attributes.name]}
            />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.age.attributes.name}
              className={schema.classes.label}
              content={schema.fields.age.label.content}
            />
            <TextField
              name={schema.fields.age.attributes.name}
              type={schema.fields.age.attributes.type}
              className={schema.classes.input}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.age.attributes.name]}
            />
            <ErrorField
              error={formik.errors[schema.fields.age.attributes.name]}
              touched={formik.touched[schema.fields.age.attributes.name]}
            />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.collar.attributes.name}
              className={schema.classes.label}
              content={schema.fields.collar.label.content}
            />
            <SelectField
              name={schema.fields.collar.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.collar.name]}
              options={schema.fields.collar.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField
              error={formik.errors[schema.fields.collar.attributes.name]}
              touched={formik.touched[schema.fields.collar.attributes.name]}
            />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.size.attributes.name}
              className={schema.classes.label}
              content={schema.fields.size.label.content}
            />
            <SelectField
              name={schema.fields.size.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.size.name]}
              options={schema.fields.size.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField
              error={formik.errors[schema.fields.size.attributes.name]}
              touched={formik.touched[schema.fields.size.attributes.name]}
            />
          </div>

          <div className='sm:col-span-3'>
            <Label
              htmlFor={schema.fields.description.attributes.name}
              className={schema.classes.label}
              content={schema.fields.description.label.content}
            />
            <TextAreaField
              name={schema.fields.description.attributes.name}
              className={schema.classes.textarea}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.description.attributes.name]}
              rows={5}
            />
            <ErrorField
              error={formik.errors[schema.fields.description.attributes.name]}
              touched={
                formik.touched[schema.fields.description.attributes.name]
              }
            />
          </div>

          <div className='sm:col-span-3 sm:flex sm:justify-end'>
            <button
              type='submit'
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
              // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
            >
              Submit
            </button>
            <button
              type='button'
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
              onClick={() => setOpen(true)}
            >
              load image
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
