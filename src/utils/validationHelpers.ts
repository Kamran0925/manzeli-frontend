import { FormState } from "../components/shared/RegistrationFields/RegistrationFields";

export const validate = (
  type: string,
  value: string,
  passwordValue?: string,
): { errorMessage: string } => {
  switch (type) {
    case "text":
      if (value.trim().length <= 8 || value.trim() === "") {
        return {
          errorMessage: "Minimum length of 8 characters",
        };
      }
      return { errorMessage: "" };

    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim() === "") {
        return { errorMessage: "Email field cannot be empty" };
      }
      if (!emailRegex.test(value)) {
        return { errorMessage: "Invalid email format" };
      }
      return { errorMessage: "" };

    case "password":
      if (value.trim().length <= 8 || value.trim() === "") {
        return {
          errorMessage: "Password cannot be less than 8 characters",
        };
      }
      if (value.trim() !== passwordValue && value.trim() !== "") {
        return { errorMessage: "Passwords do not match" };
      }
      return { errorMessage: "" };

    case "checkbox":
      if (!value) {
        return {
          errorMessage: "You must accept the terms and conditions",
        };
      }
      return { errorMessage: "" };

    default:
      return { errorMessage: "Unknown field type" };
  }
};

export const hasErrors = (formState: FormState): boolean => {
  return Object.values(formState).some(field => field.error);
};

export const collectErrors = (formState: FormState): string[] => {
  return [
    formState.username.errorMessage,
    formState.email.errorMessage,
    formState.password.errorMessage,
    formState.confirmPassword.errorMessage,
    !formState.isTermsAccepted
      ? "You must accept the terms and conditions"
      : "",
  ].filter(error => error.length > 0);
};
