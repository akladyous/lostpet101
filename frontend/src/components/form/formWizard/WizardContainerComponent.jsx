import React from "react";

export default function WizardContainerComponent(props) {
  //   const { currentStep, lastStep, next, previous, setCurrentStatus } =
  //     props.stepsProp || {};
  const { stepsProp } = props || {};
  const currentChild = React.Children.toArray(props.children)[
    stepsProp.currentStep
  ];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      //   currentStep,
      //   lastStep,
      //   next,
      //   previous,
      //   setCurrentStatus,
      ...stepsProp,
    });
  } else {
    return null;
  }
}
