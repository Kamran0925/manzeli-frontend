import { FormState } from "../components/shared/RegistrationFields/RegistrationFields";

export const validate = (
  type: string,
  value: string,
): { errorMessage: string } => {
  switch (type) {
    case "username":
      if (value.trim().length < 5) {
        return {
          errorMessage: "Minimum of 5 characters",
        };
      }
      return { errorMessage: "" };

    case "text":
      if (value.trim().length < 8 || value.trim() === "") {
        return {
          errorMessage: "Minimum of 8 characters",
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
      if (value.trim().length < 8) {
        return {
          errorMessage: "Minimum of 8 characters",
        };
      }
      return { errorMessage: "" };

    case "checkbox":
      if (!value) {
        return {
          errorMessage: "You must accept the terms and conditions",
        };
      }
      return { errorMessage: "" };

    case "select":
      if (!value) {
        return {
          errorMessage: "You must select at least one option",
        };
      }
      return { errorMessage: "" };

    case "phone":
      if (value.trim().length < 12) {
        return {
          errorMessage: "Minimum of 12 digits",
        };
      }
      return { errorMessage: "" };

    default:
      return { errorMessage: "Unknown field type" };
  }
};

export const validateConfirmPassword = (
  type: string,
  confirmPasswordValue: string,
  passwordValue: string,
): { errorMessage: string } => {
  switch (type) {
    case "password":
      if (confirmPasswordValue.trim().length < 8) {
        return {
          errorMessage: "Confirm password cannot be less than 8 characters",
        };
      }
      if (confirmPasswordValue.trim() !== passwordValue) {
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

export const collectContactDetailErrors = (formState: FormState): string[] => {
  return [
    formState.address.errorMessage,
    formState.street.errorMessage,
    formState.city.errorMessage,
    formState.phone.errorMessage,
    formState.identity.errorMessage,
    formState.residence.errorMessage,
  ].filter(error => error.length > 0);
};

const formatFieldName = (field: string): string => {
  const formatted = field
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .toLowerCase();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

export const displayError = (field: string, error: string): string => {
  return `${formatFieldName(field)} should have ${error.toLowerCase()}`;
};
