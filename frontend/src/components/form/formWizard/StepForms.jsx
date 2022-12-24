import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "next":
      debugger;
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        onboardingData: {
          ...state.onboardingData,
          ...action.payload,
        },
      };
    case "previous":
      debugger;
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    default:
      return state;
  }
}
function initializeState(initialValues) {
  return Object.assign({ currentIndex: 0 }, initialValues);
}

export default function StepForms(initialValues) {
  const [state, dispatch] = useReducer(reducer, initialValues, initializeState);

  const onNext = useCallback(
    (stepData) => {
      if (state.currentIndex < state.steps.length - 1) {
        dispatch({ type: "next", payload: stepData });
      } else if (state.currentIndex === state.steps.length - 1) {
        onFinish();
      }
    },
    [state.currentIndex]
  );

  const OnPrevious = useCallback(() => {
    if (state.currentIndex > 0) {
      dispatch({ type: "previous" });
    }
  }, [state.currentIndex]);

  const onFinish = useCallback(() => {}, []);

  const isFirstStep = useMemo(() => {
    return state.currentIndex === 0;
  }, [state.currentIndex]);
}
