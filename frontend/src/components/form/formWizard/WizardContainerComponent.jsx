import React, { useEffect, useRef } from "react";

export default function WizardContainerComponent(props) {
  const isMounted = useRef(false);
  const {
    children,
    firstStep,
    lastStep,
    currentStep,
    isFirstStep,
    isLastStep,
    next,
    previous,
    data,
  } = props || {};
  debugger;
  const currentChild = React.Children.toArray(children)[currentStep];

  useEffect(() => {
    isMounted.current = true;

    return () => (isMounted.current = false);
  }, []);

  if (isMounted.current && React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      firstStep,
      lastStep,
      currentStep,
      isFirstStep,
      isLastStep,
      next,
      previous,
      data,
    });
  } else {
    return null;
  }
}
