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
      return { errorMessage: "" };

    case "confirmPassword":
      if (value.trim() === "") {
        return {
          errorMessage: "Confirm password cannot be empty",
        };
      }
      if (value.trim() !== passwordValue) {
        return { errorMessage: "Passwords do not match" };
      }
      return { errorMessage: "" };

    default:
      return { errorMessage: "Unknown field type" };
  }
};

export const hasErrors = (formState: FormState): boolean => {
  return Object.values(formState).some(field => field.error);
};
