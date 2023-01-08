/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../../../hooks/useAxios.jsx';
import { SpinnerCircle } from '../../../../assets/images/icons/SpinnerCircle.jsx';
import { MessageField } from '../../../../components/form/ErrorMessage.jsx';
import ReportDetail from '../../reports/ReportDetail.jsx';
import { useEffect, useState, useRef, useCallback } from 'react';
import { setFormData } from '../lost-found/form/lostFoundFormData.js';

export default function Preview(props) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const [request, { isLoading, isError, error, isSuccess, data }] = useAxios(
    null,
    { manual: true }
  );

  const {
    currentStep,
    lastStep,
    isFirstStep,
    isLastStep,
    getState,
    getStepData,
    next,
    prev,
    setStepData,
    setStepStatus,
  } = props || {};

  const handleForm = useCallback(() => {
    const { formData } = setFormData(getStepData);
    if (isSuccess) return;
    if (formData && formData instanceof FormData) {
      request({
        method: 'post',
        url: 'reports',
        headers: { 'content-type': 'multipart/form-data' },
        data: formData,
      });
    }
  }, [getStepData, request, isSuccess]);

  const report = {
    ...getStepData[0],
    pet: {
      ...getStepData[1],
      photo_url: getStepData[1].image
        ? URL.createObjectURL(getStepData[1].image)
        : null,
    },
  };

  useEffect(() => {
    if (isError && error) {
      setMessage(error.data.message);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess && data) {
      setMessage('Listing successfully created');
      setTimeout(() => {
        debugger;
        navigate(`/listings/${getStepData[1].name}`, {
          state: data,
        });
      }, 3000);
    }
  }, [isSuccess, data]);

  return (
    <>
      <ReportDetail report={report}>
        <div className="sm:col-span-12 sm:flex sm:justify-between sm:items-center">
          <MessageField
            isError={isError}
            isSuccess={isSuccess}
            message={message}
            classes="capitalize text-lg"
          />
          <div>
            {!isSuccess && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  prev();
                }}
                disabled={isSuccess}
                className="btn btn-secondary py-2 px-6 mx-1"
              >
                {isLoading ? <SpinnerCircle classes="text-orange-500" /> : null}
                back
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleForm();
              }}
              // disabled={isSuccess}
              className="btn btn-secondary py-2 px-4 mx-1"
            >
              {isLoading ? <SpinnerCircle classes="text-orange-500" /> : null}
              Submit
            </button>
          </div>
        </div>
      </ReportDetail>
    </>
  );
}
