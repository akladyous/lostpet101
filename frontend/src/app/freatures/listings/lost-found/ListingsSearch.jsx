import { lostFoundSchema as schema } from './form/lostFoundSchema.js';
import { TextField } from '../../../../components/form/TextField.jsx';
import { SelectField } from '../../../../components/form/SelectField.jsx';
import { useForm } from 'react-hook-form';

export default function ListingsSearch({ onSubmit, onError }) {
  const { handleSubmit, control } = useForm({
    defaultValues: schema.initialValues,
    resolver: schema.validation,
  });

  return (
    <>
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
            disabled={false}
          />
        </div>
        <div>
          <SelectField
            control={control}
            input={schema.fields.species.attributes}
            label={schema.fields.species.label}
            classes={schema.classes}
            options={schema.fields.species.options}
            disabled={false}
          />
        </div>
        <div>
          <TextField
            control={control}
            input={schema.fields.breed.attributes}
            label={schema.fields.breed.label}
            classes={schema.classes}
            disabled={false}
          />
        </div>
        <div className="sm:col-start-2">
          <button className="btn btn-secondary px-8 rounded-2xl w-full">
            Search
          </button>
        </div>
      </form>
    </>
  );
}
