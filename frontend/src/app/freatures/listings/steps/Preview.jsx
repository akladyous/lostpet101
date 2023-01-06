import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../../../hooks/useAxios.jsx';
import { SpinnerCircle } from '../../../../assets/images/icons/SpinnerCircle.jsx';
import { MessageField } from '../../../../components/form/ErrorMessage.jsx';
import ReportCard from '../../reports/ReportCard.jsx';

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
  const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
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
  const report = {
    ...getState.onboardingData[0],
    pet: {
      ...getState.onboardingData[1],
      photo_url: URL.createObjectURL(getState.onboardingData[1].image),
    },
  };
  console.log(report);
  return (
    <>
      <ReportCard report={report}>
        <div className="sm:col-span-12 sm:flex sm:justify-between items-center ">
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
      </ReportCard>
    </>
  );
}
