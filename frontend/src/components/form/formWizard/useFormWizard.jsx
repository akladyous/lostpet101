import { useCallback, useReducer, useMemo } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      debugger;
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        data: { ...state.data, [action.model]: action.payload },
      };
    case "previous":
      debugger;
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
        data: { ...state.data, [action.model]: action.payload },
      };
    default:
      return state;
  }
};

function initializeState(initialState) {
  return Object.assign({ currentIndex: 0 }, initialState);
}

export function useFormWizard(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState);

  const next = useCallback(
    (data, model) => {
      if (state.currentIndex < state.steps.length - 1) {
        dispatch({ type: "next", payload: data, model: model });
      } else if (state.currentIndex === state.steps.length - 1) {
        onFinish();
      }
    },
    [state.currentIndex]
  );

  const previous = useCallback(
    (data, model) => {
      if (state.currentIndex > 0) {
        dispatch({ type: "previous", model: model, payload: data });
      }
    },
    [state.currentIndex]
  );

  const onFinish = useCallback(() => {}, []);

  const isFirstStep = useMemo(() => {
    return state.currentIndex === 0;
  }, [state.currentIndex]);

  return {
    firstStep: 0,
    lastStep: state.steps.length - 1,
    currentStep: state.currentIndex,
    // isFirstStep: state.currentIndex === 0,
    isFirstStep,
    isLastStep: state.currentIndex === state.steps.length - 1,
    next,
    previous,
    data: state.data,
  };
}
