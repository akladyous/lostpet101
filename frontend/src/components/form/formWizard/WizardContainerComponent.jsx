import React, { useEffect, useRef } from "react";

export default function WizardContainerComponent(props) {
  const {
    children,
    currentStep,
    lastStep,
    // isFirstStep,
    // isLastStep,
    onNext,
    onPrevious,
  } = props || {};
  const isMounted = useRef(false);
  const next = (stepData) => {
    onNext(stepData);
  };
  // debugger;
  const currentChild = React.Children.toArray(children)[currentStep];

  useEffect(() => {
    isMounted.current = true;

    return () => (isMounted.current = false);
  }, []);

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      currentStep,
      lastStep,
      // isFirstStep,
      // isLastStep,
      next,
      previous: onPrevious,
    });
  } else {
    return null;
  }
}
