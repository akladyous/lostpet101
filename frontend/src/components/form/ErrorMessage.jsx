import clsx from 'clsx';

export function MessageField({ isError, isSuccess, message, classes }) {
  return (
    <div>
      <p
        className={clsx(
          'text-sm',
          { ['text-red-600']: isError },
          { ['text-orange-500']: isSuccess },
          classes
        )}
      >
        {message}
      </p>
    </div>
  );
}
