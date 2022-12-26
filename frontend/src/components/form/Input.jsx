import { useController } from 'react-hook-form';

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
      {errors[input.name] ? (
        <p className={classes.error ?? 'text-sm text-red-600'}>
          {errors[input.name]}
        </p>
      ) : null}
    </>
  );
}
