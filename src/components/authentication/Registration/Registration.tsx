import React, { useEffect, useState } from "react";
import { useFormContext } from "../../../context/FormContext";
import AccountSelectable from "../AccountSelectable/AccountSelectable";
import SignUp from "../SignUp/SignUp";
import ContactDetails from "../ContactDetails/ContactDetails";
import UploadImage from "../UploadImage/UploadImage";

const Registration = () => {
  const { formState } = useFormContext();
  const { step } = formState;

  const [content, setContent] = useState(<AccountSelectable />);

  useEffect(() => {
    switch (step) {
      case 0:
        setContent(<AccountSelectable />);
        break;
      case 1:
        setContent(<SignUp />);
        break;
      case 2:
        setContent(<ContactDetails />);
        break;
      case 3:
        setContent(<UploadImage />);
        break;
      default:
        setContent(<AccountSelectable />);
    }
  }, [step]);

  return <div>{content}</div>;
};

export default Registration;
