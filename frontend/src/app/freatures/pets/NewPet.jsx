import { v4 as uuid } from "uuid";
import { useCallback, useRef, useState, useEffect } from "react";
import { Label } from "../../../components/form/Label.jsx";
import { SelectField } from "../../../components/form/SelectField.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { TextAreaField } from "../../../components/form/TextAreaField.jsx";
import { ErrorField } from "../../../components/form/ErrorField.jsx";
import DogPlaceholder from "../../../assets/images/icons/DogPlaceholder.jsx";
import { useForm } from "react-hook-form";

function NewPetForm(props) {
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

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: {
      isValid,
      isDirty,
      isSubmitting,
      isLoading,
      isSubmitted,
      errors,
    },
  } = useForm({
    defaultValues: schema.initialValues,
    resolver: schema.validation,
  });
  // debugger;
  const inputFileRef = useRef();
  const isMounted = useRef(false);
  const [image, setImage] = useState(getValues("image") || undefined);

  const onSubmit = (values) => {
    // const signupValues = new FormData(document.forms["signupForm"]);
    debugger;
    next(values, "pet");
  };

  const loadImage = useCallback(
    (event) => {
      event.preventDefault();
      const file = event.target.files[0];

      if (file) {
        const objectUrl = URL.createObjectURL(file);
        if (isMounted.current) {
          setImage(objectUrl);
          event.target.src = objectUrl;
        }
      }
    },
    [image]
  );

  // useEffect(() => {
  //   isMounted.current = true;

  //   return function () {
  //     isMounted.current = false;
  //   };
  // }, []);

  const inputFileField = register("image", { required: true });

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
          {/* <input
            id='image'
            type='file'
            {...inputFileField}
            ref={(event) => {
              inputFileField.ref(event);
              inputFileRef.current = event;
            }}
            accept='image/*'
            multiple={false}
            className='hidden'
            onChange={(event) => {
              loadImage(event);
              inputFileField.onChange(event);
            }}
          /> */}

          <div className='md:col-span-2'>
            <TextField
              label={schema.fields.name.label}
              input={schema.fields.name.attributes}
              classes={schema.classes}
              error={errors.name}
              register={register}
            />
            {/* <Label
              htmlFor={"name"}
              className={schema.classes.label}
              content={schema.fields.name.label.content}
            />
            <input
              {...schema.fields.name.attributes}
              {...register("name")}
              // type={schema.fields.name.attributes.type}
              className={schema.classes.input}
            /> */}
            {/* {errors.name && (
              <p className='pt-2 text-sm text-red-600'>
                {errors.name?.message}
              </p>
            )} */}
          </div>

          {/* <div className=''>
            <Label
              htmlFor={"species"}
              className={schema.classes.label}
              content={schema.fields.species.label.content}
            />
            <SelectField
              register={register}
              name={"species"}
              options={schema.fields.species.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField error={errors.species} />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.gender.attributes.name}
              className={schema.classes.label}
              content={schema.fields.gender.label.content}
            />
            <SelectField
              register={register}
              name={"gender"}
              options={schema.fields.gender.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField error={errors.gender} />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.breed.attributes.name}
              className={schema.classes.label}
              content={schema.fields.breed.label.content}
            />
            <TextField
              type={schema.fields.breed.attributes.type}
              className={schema.classes.input}
              register={register}
              name={"breed"}
            />
            <ErrorField error={errors.breed} />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.color.attributes.name}
              className={schema.classes.label}
              content={schema.fields.color.label.content}
            />
            <TextField
              type={schema.fields.color.attributes.type}
              className={schema.classes.input}
              register={register}
              name={"color"}
            />
            <ErrorField error={errors.color} />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.age.attributes.name}
              className={schema.classes.label}
              content={schema.fields.age.label.content}
            />
            <TextField
              type={schema.fields.age.attributes.type}
              className={schema.classes.input}
              register={register}
              name={"age"}
            />
            <ErrorField error={errors.age} />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.collar.attributes.name}
              className={schema.classes.label}
              content={schema.fields.collar.label.content}
            />
            <SelectField
              register={register}
              name={"collar"}
              options={schema.fields.collar.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField error={errors.collar} />
          </div>

          <div className=''>
            <Label
              htmlFor={schema.fields.size.attributes.name}
              className={schema.classes.label}
              content={schema.fields.size.label.content}
            />
            <SelectField
              register={register}
              name={"size"}
              options={schema.fields.size.attributes.options}
              className={schema.classes.input}
            />
            <ErrorField error={errors.size} />
          </div>

          <div className='sm:col-span-3'>
            <Label
              htmlFor={"description"}
              className={schema.classes.label}
              content={schema.fields.description.label.content}
            />
            <TextAreaField
              name={"description"}
              register={register}
              className={schema.classes.textarea}
              rows={5}
            />
            <ErrorField error={errors.description} />
          </div>
            */}
          {/* ------------------------------------------------------------- */}
          <div className='sm:col-span-3 sm:flex sm:justify-between'>
            <button
              type='submit'
              className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
              // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
            >
              {`Submit ${isValid ? " valid" : " inValid"}`}
            </button>
            <button
              type='button'
              onClick={async () => {
                debugger;
                const result = await trigger();
                console.log("trigger function : ", result);
              }}
            >
              trigger
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

// NewPetForm.displayName = "pet";
export default NewPetForm;
