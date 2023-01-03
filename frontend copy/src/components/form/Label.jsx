export function Label(props) {
  const { htmlFor, classes, content, children } = props || {};

  return (
    <>
      <label htmlFor={htmlFor} className={classes}>
        {content}
        {children}
      </label>
    </>
  );
}
