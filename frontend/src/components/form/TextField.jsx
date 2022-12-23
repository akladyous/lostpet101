export function TextField(props) {
  const { register, type, name, className, ...rest } = props || {};

  return (
    <>
      <input {...register(name)} type={type} className={className} {...rest} />
    </>
  );
}
