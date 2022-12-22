import { useCallback, useReducer } from "react";
import produce from "immer";

const reducer = (state, { type }) => {
  switch (type) {
    case "next":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        // steps: state.steps.map((step, index) => {
        //   return index < 1 ? { ...step, status: "complete" } : step;
        // }),
        steps: state.steps.map(function (step, index) {
          switch (true) {
            case index < this.currentIndex:
              return { ...step, status: step.status };
            case index === this.currentIndex:
              return { ...step, status: "complete" };
            case index > this.currentIndex:
              return { ...step, status: "upcoming" };
            default:
              return step;
          }
        }, state),
      };
    case "previous":
      return { ...state, currentIndex: state.currentIndex - 1 };
    case "setCurrentStatus":
      return {
        ...state,
        steps: state.steps.map(function (step, index) {
          return index === this.currentIndex
            ? { ...step, status: "current" }
            : step;
        }, state),
      };
    case "setPreviousStatus":
      debugger;
      return {
        ...state,
        steps: state.steps.map(function (step, index) {
          return index < this.currentIndex
            ? {
                ...step,
                status: this.at(index).isValid ? "complete" : "upcoming",
              }
            : step;
        }, state),
      };
    case "setNextStatus":
      return {
        ...state,
        steps: state.steps.map(function () {
          return index > this.currentIndex
            ? {
                ...step,
                status: this.at(index).isValid ? "completed" : "upcoming",
              }
            : state;
        }, state),
      };
    default:
      return state;
  }
};

function initializeState(steps) {
  return Object.assign(
    { currentIndex: 0 },
    {
      steps: steps.map(function (step, idx) {
        // return { ...step, status: idx === 0 ? "upcoming" : "upcoming" };
        return { ...step, status: "upcoming", isValid: false };
      }),
    },
    Array(steps.length - 1).fill({})
  );
}

export function useFormWizard({ steps }) {
  const [state, dispatch] = useReducer(reducer, steps, initializeState);

  console.log("state : ", state);

  const next = useCallback(
    (data) => {
      if (state.currentIndex < state.steps.length - 1) {
        dispatch({ type: "next" });
      } else if (state.currentIndex === state.steps.length - 1) {
        onFinish();
      }
    },
    [state.currentIndex]
  );

  const previous = useCallback(
    (e) => {
      e.preventDefault();
      if (state.currentIndex > 0) {
        dispatch({ type: "previous" });
      }
    },
    [state.currentIndex]
  );

  const onFinish = useCallback(() => {}, []);

  const setCurrentStatus = useCallback(() => {
    dispatch({ type: "setCurrentStatus" });
  }, [state.currentIndex]);

  //   debugger;
  //   next();
  return {
    firstStep: 0,
    lastStep: state.steps.length - 1,
    currentStep: state.currentIndex,
    isFirstStep: state.currentIndex === 0,
    isLastStep: state.currentIndex === state.steps.length - 1,
    next,
    previous,
    setCurrentStatus,
    steps: state.steps,
  };
}
