import { useState } from "react";
import ResetPasswordSuccess from "./ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ResetPasswordSuccess />;
      default:
        return <ResetPasswordForm onNext={handleNext} />;
    }
  };

  return renderStep();
};

export default ResetPassword;
