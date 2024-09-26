import { useEffect, useState } from "react";
import { AccountType, useFormContext } from "../../../context/FormContext";
import Landing from "../Landing/Landing";
import AccountSelectable from "../AccountSelectable/AccountSelectable";
import SignUp from "../SignUp/SignUp";
import ContactDetails from "../ContactDetails/ContactDetails";
import UploadImage from "../UploadImage/UploadImage";
import PropertyManagementFirm from "../../registration/PropertyManagementFirm/PropertyManagementFirm";

const Registration = () => {
  const { formState } = useFormContext();
  const { step } = formState;

  const [content, setContent] = useState(<Landing />);

  useEffect(() => {
    const renderContent = () => {
      if (step === 0) return <Landing />;
      if (step === 1) return <AccountSelectable />;

      const isIndividual =
        formState.accountType === AccountType.IndividualPropertyOwner;
      const isManagementFirm =
        formState.accountType === AccountType.PropertyManagementFirm;

      if (isIndividual) {
        switch (step) {
          case 2:
            return <SignUp />;
          case 3:
            return <ContactDetails />;
          case 4:
            return <UploadImage />;
          default:
            return <Landing />;
        }
      } else if (isManagementFirm) {
        switch (step) {
          case 2:
            return <PropertyManagementFirm />;
          case 3:
            return <SignUp />;
          default:
            return <Landing />;
        }
      }

      return <Landing />;
    };

    setContent(renderContent());
  }, [formState.accountType, step]);

  return <div>{content}</div>;
};

export default Registration;
