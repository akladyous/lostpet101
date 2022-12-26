export function TextField(props) {
  const { input, label, error, classes, register, ...rest } = props || {};

  return (
    <>
      {label ? (
        <label htmlFor={input.name} className={classes.label}>
          {label?.content}
        </label>
      ) : null}
      <input
        id={input.name}
        className={classes.input}
        {...input}
        {...rest}
        {...register(input.name)}
        key={input.name}
      />
      {error ? (
        <div className="_pt-2">
          <p className={classes.error ?? 'text-sm text-red-600'}>
            {error?.message}
          </p>
        </div>
      ) : null}
    </>
  );
}
// export const TextField = memo(MemoTextField);
