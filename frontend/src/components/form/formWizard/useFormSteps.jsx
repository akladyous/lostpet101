import { useCallback, useReducer, useMemo } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'next':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        onboardingData: {
          ...state.onboardingData,
          [state.currentIndex]: {
            ...state.onboardingData[state.currentIndex],
            ...action.payload,
          },
        },
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

  const next = useCallback(
    (stepData) => {
      console.log('next -> stepData : ', stepData);
      if (state.currentIndex < lastStep) {
        dispatch({ type: 'next', payload: stepData });
      } else if (state.currentIndex === lastStep - 1) {
        onFinish();
      }
      console.log('next -> state    : ', state);
    },
    [state.currentIndex]
  );
  const prev = useCallback(() => {
    if (state.currentIndex > 0) {
      dispatch({ type: 'previous' });
    }
  }, [state.currentIndex]);

  const getStepData = useMemo(() => {
    return state.onboardingData[state.currentIndex];
  });
  const setStepData = useCallback((stepData) => {
    dispatch({ type: 'setData', payload: stepData });
  }, []);

  const setStepStatus = useCallback((status) => {
    dispatch({ type: 'setStepStatus', payload: status });
  }, []);

  const lastStep = Object.keys(state.steps).length;

  const onFinish = useCallback(() => {
    console.log('onFinish state : ', Object.values(state.onboardingData));
    // return Object.values(state.onboardingData).pop;
    debugger;
  }, []);

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
