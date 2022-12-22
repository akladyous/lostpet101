import { useReducer } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const initialState = { currentIndex: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return {};
    case "previous":
      return {};
    default:
      return state;
  }
};

export default function StepsNav({ steps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
