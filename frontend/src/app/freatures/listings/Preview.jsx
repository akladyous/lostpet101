import { useAxios } from '../../../hooks/useAxios.jsx';

const spinner = (
  <svg
    role="status"
    className="mr-3 inline h-4 w-4 animate-spin text-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);

export default function Preview(props) {
  const {
    currentStep,
    lastStep,
    isFirstStep,
    isLastStep,
    next,
    prev,
    getState,
  } = props || {};
  const formData1 = {
    report: {
      ...getState.onboardingData[0],
      pet_attributes: getState.onboardingData[1],
    },
  };

  const [{ loading, error, data }, request, cancelOutstandingRequest] =
    useAxios(null, { manual: true });
  const handleSubmit = async () => {
    const formData = new FormData();

    for (let key in getState.onboardingData[0]) {
      formData.append(key, getState.onboardingData[0][key]);
    }

    for (let key in getState.onboardingData[1]) {
      formData.append(
        `pet_attributes[${key}]`,
        getState.onboardingData[1][key]
      );
    }

    for (let val of formData.entries()) {
      console.log(val[0] + ', ' + val[1]);
    }

    await request({
      method: 'post',
      url: 'reports',
      headers: { 'content-type': 'multipart/form-data' },
      data: formData,
    });
  };

  console.log('preview component - state : ', getState);

  return (
    <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border">
      <div className="grid grid-cols-12 gap-2 space-y-2">
        <div className="col-span-12 sm:col-span-5 h-[34rem] p-2">
          <img
            className="object-cover shadow-xl rounded-2xl h-full w-full"
            src={URL.createObjectURL(getState.onboardingData[1].image)}
            alt=""
          />
        </div>
        <div className="col-span-12 sm:col-span-7">
          <h3 className="text-3xl font-bold tracking-tight text-orange-600 uppercase">
            {getState.onboardingData[1].name}
          </h3>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <p className="py-1 text-gray-500 font-medium capitalize">
                species
              </p>
              <p className="py-1 text-gray-500 font-medium capitalize">age</p>
              <p className="py-1 text-gray-500 font-medium capitalize">
                gender
              </p>
              <p className="py-1 text-gray-500 font-medium capitalize">breed</p>
              <p className="py-1 text-gray-500 font-medium capitalize">size</p>
              <p className="py-1 text-gray-500 font-medium capitalize">
                collar
              </p>
              <p className="py-1 text-gray-500 font-medium capitalize">color</p>
              <p className="py-1 text-gray-500 font-medium capitalize">
                Date last seen
              </p>
            </div>
            <div className="col-span-9">
              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[1].species}
              </p>
              <p className="py-1 text-gray-500  capitalize">
                {/* {getState.onboardingData[0].report_type} */}
                {getState.onboardingData[1].age} {' years'}
              </p>
              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[1].gender}
              </p>

              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[1].breed}
              </p>
              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[1].size}
              </p>
              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[1].collar}
              </p>
              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[1].color}
              </p>
              <p className="py-1 text-gray-500  capitalize">
                {getState.onboardingData[0].lost_found_date}
              </p>
            </div>
          </div>
          <p className="py-1 text-gray-500 font-medium capitalize">address</p>
          <p className="py-1 text-gray-500  capitalize">
            {getState.onboardingData[0].address}
          </p>
          <p className="py-1 text-gray-500 font-medium capitalize">
            Owner Message
          </p>
          <p className="mt-3 mb-4 font-light text-gray-500 px-1">
            {getState.onboardingData[0].comment}
          </p>
        </div>

        {/* <pre className="text-xs">{JSON.stringify(getState, undefined, 2)}</pre> */}
        {/* {loading ? <p className="py-1">{spinner}</p> : null} */}
        {/* {data ? <p>{JSON.stringify(data, undefined, 2)}</p> : null} */}
        {/* {error ? <p className="py-1">{error}</p> : null} */}
      </div>

      {/* <div className="sm:col-span-12 sm:flex sm:justify-between">
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
            handleSubmit();
          }}
          // disabled={isSubmitting || (isValid && isSubmitSuccessful)}
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
          // className="btn-primary mt-2 w-full justify-center rounded-md px-6 text-base shadow-sm sm:w-auto"
        >
          Submit
        </button>
      </div> */}
    </section>
  );
}
