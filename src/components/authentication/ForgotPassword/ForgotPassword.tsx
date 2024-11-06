import { useState } from "react";

import EmailVerification from "./EmailVerfication/EmailVerification";
import LinkExpired from "./LinkExpired/LinkExpired";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

const ForgotPassword = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState<string>("");

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 2));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <EmailVerification onNext={handleNext} email={email} />;
      case 2:
        return <LinkExpired onNext={handleNext} email={email} />;
      default:
        return (
          <ForgotPasswordForm
            onNext={handleNext}
            email={email}
            setEmail={setEmail}
          />
        );
    }
  };

  return renderStep();
};

export default ForgotPassword;
