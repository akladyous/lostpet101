import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from './Label.jsx';

export const SelectField = (props) => {
  const { control, input, label, classes, options, ...rest } = props || {};

  const {
    field,

    formState: { errors },
  } = useController({
    name: input.name,
    control,
    defaultValue: input.value || '',
    rules: {},
  });

  return (
    <>
      {label ? (
        <Label
          htmlFor={input.name}
          classes={classes.label}
          content={label?.content || input.name}
        />
      ) : null}
      <div className="_mt-1">
        <select
          key={input.name}
          id={input.name}
          className={classes.input}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          ref={field.ref}
          {...rest}
        >
          <option value=""></option>
          {options.map((option, idx) => (
            <option key={idx} className="capitalize" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage
        errors={errors}
        name={input.name}
        render={({ message }) => (
          <p className={classes.inputError ?? 'text-sm text-red-600'}>
            {message}
          </p>
        )}
      />
    </>
  );
};
