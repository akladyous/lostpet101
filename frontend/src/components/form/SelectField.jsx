// import { v4 as uuid } from "uuid";
import { useEffect } from "react";
export const SelectField = (props) => {
  const { input, label, error, classes, options, register, ...rest } =
    props || {};

  useEffect(() => {
    console.log("selectField name: ", input.name);
  }, [error, input.name]);
  return (
    <>
      {label ? (
        <label htmlFor={input.name} className={classes.label}>
          {label?.content}
        </label>
      ) : null}
      <div className='mt-1'>
        <select
          id={input.name}
          className={classes.input}
          {...register(input.name)}
          {...rest}
        >
          <option value=''></option>
          {options.map((option, idx) => (
            <option key={idx} className='capitalize' value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <div className='_pt-2'>
          <p className={classes.error ?? "text-sm text-red-600"}>
            {error?.message}
          </p>
        </div>
      ) : null}
      {props.children}
    </>
  );
};
