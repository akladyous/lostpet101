import { useEffect, useRef } from 'react';

export function TextField(props) {
  const { input, label, value, handleChange, handleBlur, error, touched, classes, ...rest } = props || {};
  const isMounted = useRef(false);
  // debugger;
  useEffect(() => {
    isMounted.current = true;
    console.log('textField name: ', input.name, 'textField error: ', error);
    return () => {
      isMounted.current = false;
    };
  }, [handleBlur]);
  return (
    <>
      {label ? (
        <label htmlFor={input.name} className={classes.label}>
          {label?.content}
        </label>
      ) : null}
      <input
        id={input.name}
        className={classes.input}
        {...input}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        {...rest}
      />
      {error && touched ? (
        <div className="_pt-2">
          <p className={classes.error ?? 'text-sm text-red-600'}>{error}</p>
        </div>
      ) : null}
    </>
  );
}
// export const TextField = memo(MemoTextField);
