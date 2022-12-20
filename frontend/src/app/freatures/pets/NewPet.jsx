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
import { ImagePlaceHolder } from "../../../assets/images/icons/ImagePlaceHolder.jsx";
import DogPlaceholder from "../../../assets/images/icons/DogPlaceholder.jsx";

export default function NewPetForm() {
  const petInputImageRef = useRef();
  const isMounted = useRef(false);
  // const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = useCallback(async (values, actions) => {
    debugger;
  }, []);

  const formik = useFormik({
    initialValues: Object.assign(schema.initialValues, { image: null }),
    // initialValues: schema.initialValues,
    onSubmit: handleSubmit,
    // onReset: (values, actions) => {},
    validationSchema: schema.validations,
    validateOnChange: false,
  });

  const handleUploadBtn = useCallback(() => {
    petInputImageRef.current.click();
  });

  const loadImage = useCallback((event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      if (isMounted.current) {
        setImage(objectUrl);
        event.target.src = objectUrl;
      }
    }
  }, []);

  const uploadImageCB = () => {};

  useEffect(() => {
    isMounted.current = true;

    return function () {
      isMounted.current = false;
    };
  }, [image]);
  return (
    <>
      <section className={"my-10 mx-5 rounded-2xl bg-white md:col-span-2"}>
        <div className='flex min-h-full flex-col justify-center'>
          <button
            type='button'
            className='mx-auto p-1 border border-solid border-orange-400 rounded-full hover:bg-slate-50 hover:p-2.5 hover:border-spacing-4
            shadow-md transition-all duration-300 ease-linear  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
            '
            onClick={handleUploadBtn}
          >
            <div className='mx-auto h-24 w-24'>
              {image ? (
                <>
                  <img
                    src={image}
                    alt='image'
                    className='h-full w-full object-cover rounded-full'
                  />
                </>
              ) : (
                <DogPlaceholder />
              )}
            </div>
          </button>
        </div>

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

          <div className='md:col-span-2'>
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
              htmlFor={schema.fields.species.attributes.name}
              className={schema.classes.label}
              content={schema.fields.species.label.content}
            />
            <SelectField
              name={schema.fields.species.attributes.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.species.attributes.name]}
              options={schema.fields.species.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField
              error={formik.errors[schema.fields.species.attributes.name]}
              touched={formik.touched[schema.fields.species.attributes.name]}
            />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.gender.attributes.name}
              className={schema.classes.label}
              content={schema.fields.gender.label.content}
            />
            <SelectField
              name={schema.fields.gender.attributes.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.gender.attributes.name]}
              options={schema.fields.gender.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField
              error={formik.errors[schema.fields.gender.attributes.name]}
              touched={formik.touched[schema.fields.gender.attributes.name]}
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
              name={schema.fields.collar.attributes.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.collar.attributes.name]}
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
              name={schema.fields.size.attributes.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[schema.fields.size.attributes.name]}
              options={schema.fields.size.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField
              error={formik.errors[schema.fields.size.attributes.name]}
              touched={formik.touched[schema.fields.size.attributes.name]}
            />
          </div>

          {/* <div className='_md:col-span-3 '>
            <Label
              htmlFor={"image"}
              className={schema.classes.label}
              content={"Pet Image"}
            />
            <span className='block mt-1 w-full p-2 h-12 text-base text-gray-700 border  border-gray-300 rounded focus:text-gray-700 focus:bg-white'>
              load
            </span>
            <div className='flex justify-between items-center'></div>
          </div> */}

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
              // disabled={formik.isValid}
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
              // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
