import { useCallback, useRef, useState, useEffect, useReducer } from 'react';
import { petSchema as schema } from './form/petSchema.jsx';
import { FileField } from '../../../components/form/FileField.jsx';
import { TextField } from '../../../components/form/TextField.jsx';
import { TextAreaField } from '../../../components/form/TextAreaField.jsx';
import { SelectField } from '../../../components/form/SelectField.jsx';
import DogPlaceholder from '../../../assets/images/icons/DogPlaceholder.jsx';
import { useForm } from 'react-hook-form';

function NewPetForm(props) {
  const {
    currentStep,
    lastStep,
    isFirstStep,
    isLastStep,
    setStepStatus,
    next,
    prev,
    getStepData,
    setStepData,
    getState,
    initialValues,
  } = props || {};
  const [petImage, setPetImage] = useState(() => {
    if (getStepData.image && getStepData.image instanceof File) {
      return URL.createObjectURL(getStepData.image);
    }
    return undefined;
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: getStepData,
    resolver: schema.validation,
  });

  const inputFileRef = useRef();
  const setPetImageState = useCallback(
    (image) => {
      const objectURL = URL.createObjectURL(image);
      setPetImage(objectURL);
    },
    [setPetImage, currentStep]
  );

  const onSubmit = (values, e) => {
    console.log('petImage : ', petImage);
    console.log('inputFileRef : ', inputFileRef.current);
    next(values);
  };
  const onError = (errors, e) => {
    console.log('onErrors  :', errors, 'onErrors event: ', e);
  };

  return (
    <>
      <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border">
        <div className={'my-8 mx-5'}>
          <div className="flex flex-col justify-center">
            <button
              type="button"
              id="pet-image"
              className="mx-auto p-1 border border-solid border-orange-400 rounded-full hover:bg-slate-50 hover:p-2 hover:border-spacing-4 shadow-md transition-all duration-300 ease-linear  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              onClick={(e) => {
                inputFileRef.current.click();
              }}
            >
              <div className="mx-auto h-24 w-24">
                {petImage ? (
                  <>
                    <img
                      src={petImage}
                      alt="dog-iamge"
                      className="h-full w-full object-cover rounded-full"
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
            onSubmit={handleSubmit(onSubmit, onError)}
            className="mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8 md:grid-cols-3"
          >
            <FileField
              control={control}
              input={schema.fields.image.attributes}
              classes={schema.classes}
              ref={inputFileRef}
              imageUploader={setPetImageState}
            />

            <div className="md:col-span-2">
              <TextField
                control={control}
                input={schema.fields.name.attributes}
                label={schema.fields.name.label}
                classes={schema.classes}
              />
            </div>
            <div>
              <SelectField
                control={control}
                input={schema.fields.species.attributes}
                label={schema.fields.species.label}
                classes={schema.classes}
                options={schema.fields.species.options}
              />
            </div>
            <div>
              <SelectField
                control={control}
                input={schema.fields.gender.attributes}
                label={schema.fields.gender.label}
                classes={schema.classes}
                options={schema.fields.gender.options}
              />
            </div>
            <div>
              <TextField
                control={control}
                input={schema.fields.breed.attributes}
                label={schema.fields.breed.label}
                classes={schema.classes}
              />
            </div>
            <div>
              <TextField
                control={control}
                label={schema.fields.color.label}
                input={schema.fields.color.attributes}
                classes={schema.classes}
              />
            </div>
            <div>
              <TextField
                control={control}
                label={schema.fields.age.label}
                input={schema.fields.age.attributes}
                classes={schema.classes}
              />
            </div>
            <div>
              <SelectField
                control={control}
                input={schema.fields.collar.attributes}
                label={schema.fields.collar.label}
                classes={schema.classes}
                options={schema.fields.collar.options}
              />
            </div>
            <div>
              <SelectField
                control={control}
                input={schema.fields.size.attributes}
                label={schema.fields.size.label}
                classes={schema.classes}
                options={schema.fields.size.options}
              />
            </div>
            <div className="sm:col-span-3">
              <TextAreaField
                control={control}
                input={schema.fields.description.attributes}
                label={schema.fields.description.label}
                classes={schema.classes}
              />
            </div>

            {/* ------------------------------------------------------------- */}
            <div className="sm:col-span-3 sm:flex sm:justify-between">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  prev();
                }}
                disabled={isFirstStep}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              >
                back
              </button>
              <button
                type="submit"
                // disabled={isSubmitting || (isValid && isSubmitSuccessful)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default NewPetForm;
