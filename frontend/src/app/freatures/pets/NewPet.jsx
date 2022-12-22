import { useCallback, useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { Label } from "../../../components/form/Label.jsx";
import { SelectField } from "../../../components/form/SelectField.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { TextAreaField } from "../../../components/form/TextArea.jsx";
import { ErrorField } from "../../../components/form/ErrorField.jsx";
import DogPlaceholder from "../../../assets/images/icons/DogPlaceholder.jsx";

export default function NewPetForm(props) {
  const {
    schema,
    firstStep,
    lastStep,
    currentStep,
    isFirstStep,
    isLastStep,
    next,
    previous,
    data,
  } = props || {};

  const petInputImageRef = useRef();
  const isMounted = useRef(false);
  const [image, setImage] = useState(data.pet.image || undefined);

  const handleSubmit = (values, actions) => {
    // const signupValues = new FormData(document.forms["signupForm"]);
    console.log("handle form submit");
    actions.setSubmitting(false);
    actions.resetForm({ values: data["pet"] });
    next(values, "pet");
  };

  const formik = useFormik({
    // initialValues: schema.initialValues,
    initialValues: data.pet,
    onSubmit: handleSubmit,
    validationSchema: schema.validationSchema,
    validateOnChange: false,
    enableReinitialize: false,
  });

  const loadImage = useCallback(
    (event) => {
      event.preventDefault();
      const file = event.target.files[0];

      if (file) {
        const objectUrl = URL.createObjectURL(file);
        if (isMounted.current) {
          setImage(objectUrl);
          // event.target.src = objectUrl;
        }
      }
    },
    [image]
  );

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
            id='pet-image'
            className='mx-auto p-1 border border-solid border-orange-400 rounded-full hover:bg-slate-50 hover:p-2 hover:border-spacing-4
            shadow-md transition-all duration-300 ease-linear  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
            '
            onClick={(e) => petInputImageRef.current.click()}
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
          name={schema.name}
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
              formik.setFieldValue("image", e.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />

          <div className='md:col-span-2'>
            <Label
              htmlFor={"name"}
              className={schema.classes.label}
              content={schema.fields.name.label.content}
            />
            <TextField
              name={"name"}
              type={schema.fields.name.attributes.type}
              className={schema.classes.input}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values["name"]}
            />
            <ErrorField
              error={formik.errors["name"]}
              touched={formik.touched["name"]}
            />
          </div>

          <div className=''>
            <Label
              htmlFor={"species"}
              className={schema.classes.label}
              content={schema.fields.species.label.content}
            />
            <SelectField
              name={"species"}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values["species"]}
              options={schema.fields.species.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField
              error={formik.errors["species"]}
              touched={formik.touched["species"]}
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
              htmlFor={"description"}
              className={schema.classes.label}
              content={schema.fields.description.label.content}
            />
            <TextAreaField
              name={"description"}
              className={schema.classes.textarea}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values["description"]}
              rows={5}
            />
            <ErrorField
              error={formik.errors["description"]}
              touched={formik.touched["description"]}
            />
          </div>

          <div className='sm:col-span-3 sm:flex sm:justify-between'>
            <button
              type='submit'
              // disabled={formik.isValid}
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
              // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
            >
              {`Submit ${formik.isValid ? " valid" : " inValid"}`}
            </button>
          </div>
        </form>
        <button
          type='button'
          onClick={(e) => {
            // debugger;
            e.preventDefault();
            previous();
          }}
          disabled={isFirstStep}
          className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
          // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
        >
          back
        </button>
      </section>
    </>
  );
}
