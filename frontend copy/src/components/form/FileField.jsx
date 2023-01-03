import { useCallback, useState, forwardRef } from 'react';
import { useController } from 'react-hook-form';

const FileFieldRef = (props, ref) => {
  const { control, input, classes, imageUploader, ...rest } = props || {};

  const {
    field,
    formState: { errors },
  } = useController({
    name: input.name,
    control,
    defaultValue: input.value,
    rules: {},
  });

  const loadImage = useCallback(
    (event) => {
      event.preventDefault();
      const file = event.target.files[0];

      if (event.target.value && file instanceof File) {
        imageUploader(file);
        field.onChange({
          target: {
            name: input.name,
            value: event.target.files[0],
            // value: objectUrl,
          },
        });
      }
    },
    [control]
  );

  return (
    <>
      <input
        key={input.name}
        id={input.name}
        className={classes.file}
        {...input}
        ref={(event) => {
          field.ref(event);
          ref.current = event;
        }}
        onChange={(event) => {
          loadImage(event);
        }}
        onBlur={field.onBlur}
        {...rest}
      />
    </>
  );
};
export const FileField = forwardRef(FileFieldRef);
// export const MemoizedComponent = React.memo(TextField);
