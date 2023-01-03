import { lostFoundSchema as schema } from './form/lostFoundSchema.js';
import { TextField } from '../../../../components/form/TextField.jsx';
import { SelectField } from '../../../../components/form/SelectField.jsx';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

export default function ListingsSearch() {
  const {
    handleSubmit,
    setFocus,
    control,
    formState: { isValid, isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: schema.initialValues,
    resolver: schema.validation,
  });

  const onSubmit = useCallback(() => {}, []);
  const onError = useCallback(() => {}, []);

  return (
    <>
      <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl mb-2 border">
        <div>
          <form
            name={schema.name}
            className="grid sm:grid-cols-3 p-3 gap-x-3 space-y-3"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div>
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
              <TextField
                control={control}
                input={schema.fields.breed.attributes}
                label={schema.fields.breed.label}
                classes={schema.classes}
              />
            </div>
            <div className="sm:col-start-2">
              <button className="btn btn-secondary px-8 rounded-2xl w-full">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
