import { useCallback, useState, forwardRef } from 'react';
import { useController } from 'react-hook-form';

const FileFieldRef = (props, ref) => {
  const { control, input, classes, ...rest } = props || {};
  const [petImage, setPetImage] = useState();

  const {
    field,
    formState: { errors },
  } = useController({
    name: input.name,
    control,
    defaultValue: input.value || '',
    rules: {},
  });

  const loadImage = useCallback((event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPetImage(objectUrl);
      field.onChange({
        target: {
          name: input.name,
          value: objectUrl,
          // value: event.target.files[0],
        },
      });
      // event.target.src = objectUrl;
      // if (isMounted.current) {
      // }
    }
  }, []);

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
          // debugger;
          loadImage(event);
          // field.onChange({
          //   target: {
          //     name: input.name,
          //     value: event.target.files[0],
          //   },
          // });
        }}
        onBlur={field.onBlur}
      />
    </>
  );
};
export const FileField = forwardRef(FileFieldRef);
// export const MemoizedComponent = React.memo(TextField);
