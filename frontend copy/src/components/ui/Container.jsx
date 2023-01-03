import clsx from "clsx";

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 md:px-10", className)}
      {...props}
    />
  );
}
