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
  return Object.assign(
    { currentIndex: 0 },
    { steps: { ...stepsData.steps } },
    { onboardingData: { ...stepsData.initialValues } }
  );
}

export function useFormSteps(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState);

  const getStepData = useMemo(() => {
    return state.onboardingData[state.currentIndex];
  });

  const setStepData = (stepData) => {
    dispatch({ type: 'setData', payload: stepData });
  };

  const next = (stepData) => {
    if (state.currentIndex < lastStep) {
      if (stepData) dispatch({ type: 'setStepData', payload: stepData });
      dispatch({ type: 'next' });
    } else if (state.currentIndex === lastStep) {
      onFinish();
    }
  };

  const prev = () => {
    if (state.currentIndex > 0) dispatch({ type: 'previous' });
  };

  const setStepStatus = (status) => {
    dispatch({ type: 'setStepStatus', payload: status });
  };

  const lastStep = Object.keys(state.steps).length - 1;

  const onFinish = () => {
    console.log('onFinish state : ', Object.values(state.onboardingData));
  };
  const getState = state;

  return {
    currentStep: state.currentIndex,
    lastStep: lastStep,
    isFirstStep: state.currentIndex === 0,
    isLastStep: state.currentIndex === lastStep - 1,
    setStepStatus,
    next,
    prev,
    setStepData,
    getStepData,
    getState,
  };
}
