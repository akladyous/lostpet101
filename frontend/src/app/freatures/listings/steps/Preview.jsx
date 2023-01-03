import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../../../hooks/useAxios.jsx';
import { SpinnerCircle } from '../../../../assets/images/icons/SpinnerCircle.jsx';
import { MessageField } from '../../../../components/form/ErrorMessage.jsx';

export default function Preview(props) {
  const {
    currentStep,
    lastStep,
    isFirstStep,
    isLastStep,
    next,
    prev,
    getStepData,
    getState,
  } = props || {};

  const navigate = useNavigate();
  const [{ isLoading, isError, error, isSuccess, data }, request] = useAxios(
    null,
    { manual: true }
  );

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
    // for (let val of formData.entries()) {
    //   console.log(val[0] + ', ' + val[1]);
    // }

    await request({
      method: 'post',
      url: 'reports',
      headers: { 'content-type': 'multipart/form-data' },
      data: formData,
    });

    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
  };

  // console.log('preview component - state : ', getState);

  return (
    <section className="relative border-orange-100 bg-white shadow-xl rounded-2xl border">
      <div className="grid grid-cols-12 gap-2 p-4">
        {}
        <div className="col-span-12 sm:col-span-5 h-[34rem]">
          <img
            className="object-cover shadow-xl rounded-2xl h-full w-full"
            src={URL.createObjectURL(getState.onboardingData[1].image)}
            alt=""
          />
        </div>
        <div className="col-span-12 sm:col-span-7 px-2 flex flex-col justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-orange-600 uppercase">
            {getState.onboardingData[1].name}
          </h3>
          <div className="grid grid-cols-12">
            <div className="col-span-3 [&>p]:py-1">
              {[
                'species',
                'age',
                'gender',
                'breed',
                'size',
                'collar',
                'color',
                'last seen',
                'address',
              ].map((attr, idx) => (
                <p
                  className="text-gray-500 font-medium capitalize"
                  key={`${attr}-${idx}`}
                >
                  {attr}
                </p>
              ))}
            </div>
            <div className="col-span-9 [&>p]:py-1">
              <p className="text-gray-500  capitalize">
                {getState.onboardingData[1].species}
              </p>
              <p className="text-gray-500  capitalize">
                {/* {getState.onboardingData[0].report_type} */}
                {getState.onboardingData[1].age} {' years'}
              </p>
              <p className="text-gray-500  capitalize">
                {getState.onboardingData[1].gender}
              </p>

              <p className="text-gray-500  capitalize">
                {getState.onboardingData[1].breed}
              </p>
              <p className="text-gray-500  capitalize">
                {getState.onboardingData[1].size}
              </p>
              <p className="text-gray-500  capitalize">
                {getState.onboardingData[1].collar}
              </p>
              <p className="text-gray-500  capitalize">
                {getState.onboardingData[1].color}
              </p>
              <p className="text-gray-500  capitalize">
                {new Date(
                  getState.onboardingData[0].lost_found_date
                ).toLocaleDateString()}
              </p>
              <p className=" text-gray-500  capitalize">
                {getState.onboardingData[0].address}
              </p>
            </div>
          </div>
          <p className="text-gray-500 font-medium capitalize">Owner Message</p>
          <p className="font-light text-gray-500 px-1 pt-1 pb-4">
            {getState.onboardingData[0].comment}
          </p>

          <div className="sm:col-span-12 sm:flex sm:justify-between items-center">
            <MessageField
              {...(isError && { isError: isError, message: error })}
              {...(isSuccess && {
                isSuccess: isSuccess,
                message: 'listing successfully created',
              })}
              classes="capitalize text-lg"
            />
            <div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                  handleSubmit();
                }}
                // disabled={isSubmitting || (isValid && isSubmitSuccessful)}
                className="btn btn-secondary px-8"
              >
                {isLoading ? <SpinnerCircle classes="text-orange-500" /> : null}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
