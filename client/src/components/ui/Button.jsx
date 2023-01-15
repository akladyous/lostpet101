import { SpinnerSVG } from '../../assets/images/svgs/SpinnerSVG.jsx';

export default function Button(props) {
  const {
    type,
    value = 'Submit',
    isLoading,
    isValid,
    isSubmitSuccessful,
    className,
    ...reset
  } = props || {};
  return (
    <button
      type={type}
      className={className}
      disabled={isLoading || (isValid && isSubmitSuccessful)}
      {...reset}
    >
      {isLoading ? <SpinnerSVG /> : null}
      {isLoading ? 'processing' : value}
      {props.children}
    </button>
  );
}
