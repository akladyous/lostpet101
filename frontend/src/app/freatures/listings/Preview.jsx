export default function Preview(props) {
  const {
    currentStep,
    lastStep,
    isFirstStep,
    isLastStep,
    setStepStatus,
    next,
    prev,
    getStepData,
    setStepData,
    getState,
    initialValues,
  } = props || {};

  const submit = () => {};

  console.log('preview component - state : ', getState);
  return (
    <div>
      <h4>state data</h4>
      <pre className="text-xs">{JSON.stringify(getState, undefined, 2)}</pre>
      <div className="sm:col-span-2 sm:flex sm:justify-between">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            prev();
          }}
          disabled={isFirstStep}
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
        >
          back
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          // disabled={isSubmitting || (isValid && isSubmitSuccessful)}
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
          // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
