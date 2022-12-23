import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";

import NewPet from "../pets/NewPet.jsx";
import { reportSchema } from "../reports/form/reportSchema.jsx";
import NewReport from "../reports/NewReport.jsx";
import { useReducer, useCallback, useMemo } from "react";
function Final() {}

// ----------------------------------------------------------------------------------
function reducer(state, action) {
  switch (action.type) {
    case "next":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        onboardingData: {
          ...state.onboardingData,
          ...action.payload,
        },
      };
    case "previous":
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    default:
      return state;
  }
}
const steps = [
  { name: "report", href: "#", status: "upcoming" },
  { name: "pet", href: "#", status: "upcoming" },
  { name: "preview", href: "#", status: "upcoming" },
];
function initializeState(initialValues) {
  return Object.assign(
    { currentIndex: 0 },
    { onboardingData: {} },
    { steps: initialValues }
  );
}
// const initialValues = steps;
// ----------------------------------------------------------------------------------
export default function Steps({ initialValues = steps }) {
  const [state, dispatch] = useReducer(reducer, initialValues, initializeState);
  // debugger;
  // const stepsProp = useFormWizard({
  //   steps: steps,
  //   data: {
  //     pet: petSchema.initialValues,
  //     report: reportSchema.initialValues,
  //   },
  // });

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
  const onPrevious = useCallback(() => {
    if (state.currentIndex > 0) {
      dispatch({ type: "previous" });
    }
  }, [state.currentIndex]);
  const onFinish = useCallback(() => {}, []);

  const currentStep = useMemo(() => {
    return state.currentIndex;
  }, [state.currentIndex]);
  const lastStep = useMemo(() => {
    return state.steps.length - 1;
  });
  // const isFirstStep = useMemo(() => {
  //   return state.currentIndex === 0;
  // }, [state.currentIndex]);

  // const isLastStep = useMemo(() => {
  //   state.currentIndex === state.steps.length - 1;
  // }, [state.currentIndex]);

  // debugger;
  return (
    <>
      <WizardContainerComponent
        onNext={onNext}
        onPrevious={onPrevious}
        currentStep={currentStep}
        lastStep={lastStep}
      >
        <NewPet />
        <NewReport schema={reportSchema} />
        <Final />
      </WizardContainerComponent>
    </>
  );
}
