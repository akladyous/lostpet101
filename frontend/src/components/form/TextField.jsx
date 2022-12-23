import React from "react";

export const TextField = (props) => {
  const { input, label, error, classes, register, ...rest } = props || {};

  // debugger;
  React.useEffect(() => {
    console.log("input error : ", error);
  }, [input.name, error]);

  return (
    <div>
      {label ? (
        <label htmlFor={input.name} className={classes.label}>
          {label?.content}
        </label>
      ) : null}
      <input
        id={input.name}
        className={classes.input}
        {...input}
        {...rest}
        {...register(input.name)}
      />
      {error ? (
        <div className='_pt-2'>
          <p className={classes.error ?? "text-sm text-red-600"}>
            {error?.message}
          </p>
        </div>
      ) : null}
    </div>
  );
};
export const MemoizedComponent = React.memo(TextField);
