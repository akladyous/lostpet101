import { useCallback, useRef, useState, useEffect } from "react";
import { petSchema as schema } from "./form/petSchema.jsx";
import { SelectField } from "../../../components/form/SelectField.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { TextAreaField } from "../../../components/form/TextAreaField.jsx";
import DogPlaceholder from "../../../assets/images/icons/DogPlaceholder.jsx";
import { useForm } from "react-hook-form";

function NewPetForm(props) {
  const {
    firstStep,
    lastStep,
    currentStep,
    isFirstStep,
    isLastStep,
    next,
    previous,
    data,
  } = props || {};

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: schema.initialValues,
    resolver: schema.validation,
    mode: "onBlur",
  });

  const inputFileRef = useRef();
  const isMounted = useRef(false);
  const [image, setImage] = useState(getValues("image") || undefined);

  const onSubmit = (values) => {
    // const signupValues = new FormData(document.forms["pet"]);
    debugger;
    const dati = getValues();
    next(values, "pet");
  };

  // PET IMAGE
  const inputFileField = register("image", { required: true });
  const loadImage = useCallback(
    (event) => {
      event.preventDefault();
      const file = event.target.files[0];

      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setImage(objectUrl);
        event.target.src = objectUrl;
        // if (isMounted.current) {
        // }
      }
    },
    [image]
  );

  useEffect(() => {
    console.log("errors : ", errors);
  }, [errors]);

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
            onClick={(e) => {
              inputFileRef.current.click();
            }}
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
          onSubmit={handleSubmit(onSubmit)}
          className='mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8 md:grid-cols-3'
        >
          <input
            id={schema.fields.image.attributes.name}
            className={schema.classes.file}
            {...schema.fields.image.attributes}
            {...inputFileField}
            ref={(event) => {
              inputFileField.ref(event);
              inputFileRef.current = event;
            }}
            onChange={(event) => {
              loadImage(event);
              inputFileField.onChange(event);
            }}
          />

          <div className='md:col-span-2'>
            <TextField
              label={schema.fields.name.label}
              input={schema.fields.name.attributes}
              classes={schema.classes}
              register={register}
              error={errors.name}
            />
          </div>
          <div>
            <SelectField
              label={schema.fields.species.label}
              input={schema.fields.species.attributes}
              classes={schema.classes}
              options={schema.fields.species.options}
              register={register}
              error={errors.species}
            />
          </div>
          <div>
            <SelectField
              label={schema.fields.gender.label}
              input={schema.fields.gender.attributes}
              classes={schema.classes}
              options={schema.fields.gender.options}
              register={register}
              error={errors.gender}
            />
          </div>
          <div>
            <TextField
              label={schema.fields.breed.label}
              input={schema.fields.breed.attributes}
              classes={schema.classes}
              register={register}
              error={errors.breed}
            />
          </div>
          <div>
            <TextField
              label={schema.fields.color.label}
              input={schema.fields.color.attributes}
              classes={schema.classes}
              register={register}
              error={errors.color}
            />
          </div>
          <div>
            <TextField
              label={schema.fields.age.label}
              input={schema.fields.age.attributes}
              classes={schema.classes}
              register={register}
              error={errors.age}
            />
          </div>
          <div>
            <SelectField
              label={schema.fields.collar.label}
              input={schema.fields.collar.attributes}
              classes={schema.classes}
              options={schema.fields.collar.options}
              register={register}
              error={errors.collar}
            />
          </div>
          <div>
            <SelectField
              label={schema.fields.size.label}
              input={schema.fields.size.attributes}
              classes={schema.classes}
              options={schema.fields.size.options}
              register={register}
              error={errors.size}
            />
          </div>
          <div className='sm:col-span-3'>
            <TextAreaField
              label={schema.fields.description.label}
              input={schema.fields.description.attributes}
              classes={schema.classes}
              register={register}
              error={errors.description}
            />
          </div>

          {/* ------------------------------------------------------------- */}
          <div className='sm:col-span-3 sm:flex sm:justify-between'>
            <button
              type='button'
              onClick={(e) => {
                // debugger;
                e.preventDefault();
                previous();
              }}
              disabled={isFirstStep}
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
            >
              back
            </button>
            <button
              type='submit'
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
              // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
            >
              submit
              {/* {`Submit ${isValid ? " valid" : " inValid"}`} */}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewPetForm;
