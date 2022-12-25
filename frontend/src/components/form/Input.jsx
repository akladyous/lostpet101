import { useController } from 'react-hook-form';
import { Label } from './Label.jsx';

export default function Input({ control, input, label, classes, ...rest }) {
  const {
    field,
    formState: { isValid, isTouched, error },
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
      {error ? (
        <div className="_pt-2">
          <p className={classes.error ?? 'text-sm text-red-600'}>{error}</p>
        </div>
      ) : null}
    </>
  );
}
