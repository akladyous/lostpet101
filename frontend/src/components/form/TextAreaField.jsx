export function TextAreaField(props) {
  const { register, name, className, ...rest } = props || {};

  return (
    <>
      <textarea {...register(name)} id={name} className={className} {...rest} />
      {props.children}
    </>
  );
}
