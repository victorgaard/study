import { ReactNode, useState } from 'react';

function useMultistepForm(steps: ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function back() {
    setCurrentStep(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  }

  function next() {
    setCurrentStep(prev => {
      if (prev >= steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  }

  return {
    steps: steps,
    step: steps[currentStep],
    currentStep: currentStep + 1,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    back,
    next
  };
}

export default useMultistepForm;
