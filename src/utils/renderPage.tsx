import React from "react";
import SecondarySection from "../components/registration/SecondarySection/SecondarySection";
import SignUp from "../components/registration/SignUp/SignUp";
import ContactDetails from "../components/registration/ContactDetails/ContactDetails";
import UploadImage from "../components/registration/UploadImage/UploadImage";

export const renderPage = (step: number): React.ReactNode => {
  switch (step) {
    case -1:
      return <SecondarySection />;
    case 0:
      return <SignUp />;
    case 1:
      return <ContactDetails />;
    case 2:
      return <UploadImage />;
    default:
      return null;
  }
};
