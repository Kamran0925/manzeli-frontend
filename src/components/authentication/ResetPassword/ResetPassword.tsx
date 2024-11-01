import { useState } from "react";
import { useLocation } from "react-router-dom";
import ResetPasswordSuccess from "./ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  const [step, setStep] = useState(0);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const uid = queryParams.get("uid");
  const token = queryParams.get("token");

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ResetPasswordSuccess />;
      default:
        return (
          <ResetPasswordForm uid={uid} token={token} onNext={handleNext} />
        );
    }
  };

  return renderStep();
};

export default ResetPassword;
