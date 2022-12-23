import React from "react";

export const FileField = (props) => {
  const { input, label, error, classes, register, ...rest } = props || {};

  // debugger;
  React.useEffect(() => {
    console.log("input error : ", error);
  }, [input.name, error]);

  return (
    <>
      {label ? (
        <label htmlFor={input.name} className={classes.label}>
          {label?.content}
        </label>
      ) : null}
      <input
        id={input.name}
        className={classes.file}
        type='file'
        {...input}
        {...rest}
        ref={(event) => {
          inputFileField.ref(event);
          inputFileRef.current = event;
        }}
        accept='image/*'
        multiple={false}
        onChange={(event) => {
          loadImage(event);
          inputFileField.onChange(event);
        }}
      />
      {error ? (
        <div className='_pt-2'>
          <p className={classes.error ?? "text-sm text-red-600"}>
            {error?.message}
          </p>
        </div>
      ) : null}
    </>
  );
};
export const MemoizedComponent = React.memo(TextField);
