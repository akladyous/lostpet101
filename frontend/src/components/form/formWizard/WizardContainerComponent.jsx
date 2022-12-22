import React from "react";

export default function WizardContainerComponent(props) {
  const {
    firstStep,
    lastStep,
    currentStep,
    isFirstStep,
    isLastStep,
    next,
    previous,
    data,
  } = props || {};

  const currentChild = React.Children.toArray(props.children)[currentStep];

  if (React.isValidElement(currentChild)) {
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
