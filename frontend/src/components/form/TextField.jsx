import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';

export function TextField(props) {
  const { input, label, error, classes, register, ...rest } = props || {};

  useEffect(() => {
    console.log('textField name: ', input.name, 'textField error: ', error);
    // debugger;
  }, [input.name, error]);
  return (
    <>
      {label ? (
        <label htmlFor={input.name} className={classes.label}>
          {label?.content}
        </label>
      ) : null}
      <input id={input.name} className={classes.input} {...input} {...rest} {...register(input.name)} key={uuid()} />
      {error ? (
        <div className="_pt-2">
          <p className={classes.error ?? 'text-sm text-red-600'}>{error?.message}</p>
        </div>
      ) : null}
    </>
  );
}
// export const TextField = memo(MemoTextField);
