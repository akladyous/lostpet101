import { useReducer, useCallback } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// const initialState = {
//   currentIndex: 0,
//   steps: [
//     { name: "Step 1", href: "#", status: "upcoming" },
//     { name: "Step 2", href: "#", status: "upcoming" },
//     { name: "Step 3", href: "#", status: "upcoming" },
//     { name: "Step 4", href: "#", status: "upcoming" },
//   ],
// };
const initializeState = (steps) => {
  return Object.assign({ currentIndex: 0 }, { steps: steps });
};
const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      if (state.currentIndex < state.steps.length - 1) {
        return {
          ...state,
          currentIndex: state.currentIndex + 1,
          steps: state.steps.map((step, index) => {
            switch (true) {
              case index === this.currentIndex - 1: //set the step before current index to 'complete'
                return { ...step, status: "complete" };
              case index === state.currentIndex: // set the current step to 'current'
                return { ...step, status: "current" };
              case index > state.currentIndex:
                return { ...step, status: "upcoming" };
              default:
                return step;
            }
          }),
        };
      }
    case "previous":
      if (state.currentIndex >= 1) {
        return {
          ...state,
          currentIndex: state.currentIndex - 1,
          steps: state.steps.map((step, index) => {
            switch (true) {
              case index === this.currentIndex - 1:
                return { ...step, status: "current" };
              case index >= state.currentIndex:
                return { ...step, status: "upcoming" };
              default:
                return step;
            }
          }),
        };
      }
    default:
      return state;
  }
};

export default function StepsNav({ steps, children }) {
  const [state, dispatch] = useReducer(reducer, steps, initializeState);
  const nextStep = useCallback(() => {
    dispatch({ type: "next" });
  }, [state.currentIndex]);
  const previousStep = useCallback(() => {
    dispatch({ type: "previous" });
  }, [state.currentIndex]);

  return (
    <nav aria-label='Progress' className='mt-3'>
      <ol role='list' className='flex items-center justify-center'>
        {steps.map((step, stepIdx) => {
          return (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
                "relative"
              )}
            >
              {step.status === "complete" ? (
                <>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='h-0.5 w-full bg-orange-600' />
                  </div>
                  <a
                    href='#'
                    className='relative flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 hover:bg-orange-900'
                  >
                    <CheckIcon
                      className='h-5 w-5 text-white'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>{step.name}</span>
                  </a>
                </>
              ) : step.status === "current" ? (
                <>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='h-0.5 w-full bg-gray-200' />
                  </div>
                  <a
                    href='#'
                    className='relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-600 bg-white'
                    aria-current='step'
                  >
                    <span
                      className='h-2.5 w-2.5 rounded-full bg-orange-600'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>{step.name}</span>
                  </a>
                </>
              ) : (
                <>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='h-0.5 w-full bg-gray-200' />
                  </div>
                  <a
                    href='#'
                    className='group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400'
                  >
                    <span
                      className='h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>{step.name}</span>
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
