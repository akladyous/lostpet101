const inputFileField = register('image', { required: true });
const loadImage = useCallback((event) => {
  event.preventDefault();
  const file = event.target.files[0];
  if (event.target.value && file instanceof File) {
    const objectUrl = URL.createObjectURL(file);
    setPetImage(objectUrl);
    // debugger;
    // event.target.src = objectUrl;
    // if (isMounted.current) {
    // }
  }
}, []);

{
  <>
    <input
      id={schema.fields.image.attributes.name}
      className={schema.classes.file}
      {...schema.fields.image.attributes}
      {...inputFileField}
      ref={(event) => {
        inputFileField.ref(event);
        inputFileRef.current = event;
      }}
      onChange={(event) => {
        loadImage(event);
        inputFileField.onChange(event);
        setValue('image', event.target.files[0]);
      }}
    />
  </>;
}
