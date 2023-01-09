import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from './Label.jsx';

export function TextAreaField(props) {
  const { control, input, label, classes, isSuccess, ...rest } = props || {};

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
        <div className="flex justify-between">
          <Label
            htmlFor={input.name}
            classes={classes.label}
            content={label?.content || input.name}
          />
          <span className="text-xs text-warm-gray-500 capitalize">
            {label?.caption ? label.caption : null}
          </span>
        </div>
      ) : null}
      <textarea
        key={input.name}
        id={input.name}
        className={classes.textArea}
        {...input}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
        disabled={isSuccess}
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
