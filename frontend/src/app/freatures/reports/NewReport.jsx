import { useCallback, useRef, useState, useEffect, useReducer } from 'react';
import { reportSchema as schema } from './form/reportSchema.jsx';
import { TextField } from '../../../components/form/TextField.jsx';
import { TextAreaField } from '../../../components/form/TextAreaField.jsx';
import { SelectField } from '../../../components/form/SelectField.jsx';
import { useForm } from 'react-hook-form';

export default function NewReport(props) {
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
  const {
    handleSubmit,
    setFocus,
    control,
    getValues,
    formState: { isValid, isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: getStepData,
    resolver: schema.validation,
  });

  const onSubmit = (values, e) => {
    next({
      ...values,
      lost_found_date: new Date(values.lost_found_date)
        .toISOString()
        .split('T')[0],
    });
  };
  const onError = (errors, e) => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      const fieldKey = field;
      return errors[fieldKey] ? fieldKey : a;
    }, null);
    setFocus(firstError);

    console.log('onErrors : ', errors, 'onErrors event: ', e);
  };

  return (
    <section className={'py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'}>
      <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
      <form
        name={schema.name}
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <SelectField
            control={control}
            input={schema.fields.report_type.attributes}
            label={schema.fields.report_type.label}
            classes={schema.classes}
            options={schema.fields.report_type.options}
          />
        </div>

        <div>
          <TextField
            control={control}
            input={schema.fields.lost_found_date.attributes}
            label={schema.fields.lost_found_date.label}
            classes={schema.classes}
            pattern={'d{4}-d{2}-d{2}'}
            onInput={(e) => {
              console.log(e.target.value);
            }}
            // defaultValue={getValues('lost_found_date')}
          />
        </div>

        <div className="sm:col-span-2">
          <TextField
            control={control}
            input={schema.fields.address.attributes}
            label={schema.fields.address.label}
            classes={schema.classes}
          />
        </div>

        <div className="sm:col-span-2">
          <TextField
            control={control}
            input={schema.fields.crossroads.attributes}
            label={schema.fields.crossroads.label}
            classes={schema.classes}
          />
        </div>

        <div className="sm:col-span-2">
          <TextAreaField
            control={control}
            input={schema.fields.comment.attributes}
            label={schema.fields.comment.label}
            classes={schema.classes}
          />
        </div>

        <div className="sm:col-span-2 sm:flex sm:justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              prev();
            }}
            disabled={isFirstStep}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
          >
            back
          </button>
          <button
            type="submit"
            // disabled={isSubmitting || (isValid && isSubmitSuccessful)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
            // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
