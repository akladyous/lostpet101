import React, { useEffect, useRef } from 'react';

export default function FormStpesProvider(props) {
  const {
    children,
    currentStep,
    lastStep,
    isFirstStep,
    isLastStep,
    setStepStatus,
    next,
    prev,
    getStepData,
    setStepData,
    getState,
  } = props || {};
  const isMounted = useRef(false);

  const currentChild = React.Children.toArray(children)[currentStep];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      children,
      currentStep,
      lastStep,
      isFirstStep,
      isLastStep,
      setStepStatus,
      next,
      prev,
      getStepData,
      setStepData,
      getState,
    });
  } else {
    return null;
  }
}
