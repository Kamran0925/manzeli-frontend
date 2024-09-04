import React, { useEffect, useState } from "react";
import { useFormContext } from "../../../context/FormContext";
import Landing from "../Landing/Landing";
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
        setContent(<Landing />);
        break;
      case 1:
        setContent(<AccountSelectable />);
        break;
      case 2:
        setContent(<SignUp />);
        break;
      case 3:
        setContent(<ContactDetails />);
        break;
      case 4:
        setContent(<UploadImage />);
        break;
      default:
        setContent(<Landing />);
    }
  }, [step]);

  return <div>{content}</div>;
};

export default Registration;
