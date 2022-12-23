export function ErrorField(props) {
  const { error, children, ...rest } = props || {};
  return error ? (
    <p className='pt-2 text-sm text-red-600' {...rest}>
      {error}
      {children}
    </p>
  ) : null;
}
