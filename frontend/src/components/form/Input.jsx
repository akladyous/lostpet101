import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from './Label.jsx';

export function Input({ control, input, label, classes, ...rest }) {
  const {
    field,
    formState: { isValid, isTouched, errors },
  } = useController({
    name: input.name,
    control,
    defaultValue: input.value || '',
    rules: {},
  });
  // debugger;
  return (
    <>
      {label ? (
        <Label
          htmlFor={input.name}
          classes={classes.label}
          content={label?.content || input.name}
        />
      ) : null}
      <input
        id={input.name}
        className={classes.input}
        {...input}
        key={input.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
        {...rest}
      />
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
}
