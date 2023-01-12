import { useCallback, useReducer, useMemo } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'next':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case 'previous':
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case 'getStepData':
      return { ...state.onboardingData[state.currentIndex] };
    case 'setStepData':
      return {
        ...state,
        onboardingData: {
          ...state.onboardingData,
          [state.currentIndex]: {
            ...state.onboardingData[state.currentIndex],
            ...action.payload,
          },
        },
      };
    case 'setStepStatus':
      return {
        ...state,
        steps: {
          ...state.steps,
          [state.currentIndex]: {
            ...state.steps[state.currentIndex],
            status: action.payload,
          },
        },
      };
    default:
      return state;
  }
}

function initializeState(stepsData) {
  const { steps, formHandler } = stepsData;
  return Object.assign(
    { currentIndex: 0 },
    { steps: { ...steps } },
    { formHandler },
    { onboardingData: { ...[...stepsData.initialValues, {}] } }
    //onBoardingData = initialValues for each form step + empty object to handle the final step
  );
}

export function useFormSteps(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState);

  const currentStep = state.currentIndex;
  const lastStep = Object.keys(state.steps).length - 1;
  const isFirstStep = state.currentIndex === 0;
  const isLastStep = state.currentIndex === lastStep;

  const getStepData = useMemo(() => {
    if (isLastStep) {
      return Object.values(state.onboardingData).slice(0, -1);
    }
    return state.onboardingData[state.currentIndex];
  });

  const setStepData = (stepData) => {
    dispatch({ type: 'setStepData', payload: stepData });
  };

  const next = (stepData, callback = null) => {
    if (state.currentIndex < lastStep) {
      if (stepData) {
        dispatch({ type: 'setStepData', payload: stepData });
      }
      dispatch({ type: 'next' });
    } else if (state.currentIndex === lastStep) {
      if (typeof callback === 'function') {
        onFinish(callback);
        return;
      }
    }
    /*
    const isPenultimateStep = lastStep - state.currentIndex === 1;

    if (isPenultimateStep) {
      onFinish(state.formHandler);
      const lastStepData = Object.values(state.onboardingData).slice(0, -1);
      dispatch({ type: 'setStepData', payload: lastStepData });
    }
    */
  };

  const prev = () => {
    if (state.currentIndex > 0) dispatch({ type: 'previous' });
  };

  const setStepStatus = (status) => {
    dispatch({ type: 'setStepStatus', payload: status });
  };

  const onFinish = (callback) => {
    if (typeof callback === 'function') {
      const lastStepData = Object.values(state.onboardingData).slice(0, -1);
      callback({ ...lastStepData });
    }
  };

  return {
    currentStep: currentStep,
    lastStep: lastStep,
    isFirstStep: isFirstStep,
    isLastStep: isLastStep,
    getState: state,
    getStepData,
    next,
    prev,
    setStepData,
    setStepStatus,
  };
}
