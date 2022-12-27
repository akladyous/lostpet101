import { useEffect } from 'react';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from './Label.jsx';

export function TextField({ control, input, label, classes, ...rest }) {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { isTouched, error },
    formState: { errors },
  } = useController({
    name: input.name,
    control,
    // defaultValue: input.value || '',
    // rules: {},
  });

  useEffect(() => {
    console.log('TextField Component => isTouched : ', isTouched);
    console.log('TextField Component => error     : ', error);
  }, [isTouched, error]);

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
        key={input.name}
        id={input.name}
        className={classes.input}
        {...input}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />

      {/* {isTouched && error
        ? (() => {
            return <p className="text-sm text-red-600">{error.message}</p>;
          })()
        : null} */}

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className={classes.inputError ?? 'text-sm text-red-600'}>
            {message}
          </p>
        )}
      />
    </>
  );
}
