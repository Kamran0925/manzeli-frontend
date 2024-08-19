import { FormState } from "../components/shared/RegistrationFields/RegistrationFields";

export const validate = (
  type: string,
  value: string,
  passwordValue?: string,
): { error: boolean; errorMessage: string } => {
  switch (type) {
    case "text":
      if (value.trim() === "") {
        return { error: true, errorMessage: "Field cannot be empty" };
      }
      if (value.trim().length <= 8) {
        return {
          error: true,
          errorMessage: "Minimum length of 8 characters",
        };
      }
      return { error: false, errorMessage: "" };

    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim() === "") {
        return { error: true, errorMessage: "Email cannot be empty" };
      }
      if (!emailRegex.test(value)) {
        return { error: true, errorMessage: "Invalid email format" };
      }
      return { error: false, errorMessage: "" };

    case "password":
      if (value.trim() === "") {
        return { error: true, errorMessage: "Password cannot be empty" };
      }
      if (value.trim().length <= 8) {
        return {
          error: true,
          errorMessage: "Password cannot be less than 8 characters",
        };
      }
      return { error: false, errorMessage: "" };

    // case "confirmPassword": // Handle confirm password fields
    //   if (value.trim() === "") {
    //     return {
    //       error: true,
    //       errorMessage: "Confirm password cannot be empty",
    //     };
    //   }
    //   if (value.trim() !== passwordValue) {
    //     return { error: true, errorMessage: "Passwords do not match" };
    //   }
    //   return { error: false, errorMessage: "" };

    default:
      return { error: true, errorMessage: "Unknown field type" };
  }
};

export const hasErrors = (formState: FormState): boolean => {
  return Object.values(formState).some(field => field.error);
};
