import { v4 as uuid } from "uuid";
export const SelectField = (props) => {
  const { register, name, options, className, ...rest } = props || {};

  return (
    <>
      <div className='mt-1'>
        <select {...register(name)} id={name} className={className} {...rest}>
          <option value=''></option>
          {options.map((option, idx) => (
            <option key={idx} className='capitalize' value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {props.children}
    </>
  );
};
