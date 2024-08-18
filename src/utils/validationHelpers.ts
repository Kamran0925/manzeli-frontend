import { FormState } from "../context/FormContext";

export const validateUsername = (
  value: string,
): { error: boolean; message: string } => {
  if (value.trim() === "") {
    return { error: true, message: "Username cannot be empty" };
  }
  if (!/^[a-zA-Z]+$/.test(value)) {
    return { error: true, message: "Username must only contain letters" };
  }
  return { error: false, message: "" };
};

export const validateEmail = (
  value: string,
): { error: boolean; message: string } => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value.trim() === "") {
    return { error: true, message: "Email cannot be empty" };
  }
  if (!emailRegex.test(value)) {
    return { error: true, message: "Invalid email address" };
  }
  return { error: false, message: "" };
};

export const validatePassword = (
  value: string,
): { error: boolean; message: string } => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (value.length < minLength) {
    return {
      error: true,
      message: `Password must be at least ${minLength} characters`,
    };
  }
  if (!hasUppercase) {
    return {
      error: true,
      message: "Password must contain at least one uppercase letter",
    };
  }
  if (!hasLowercase) {
    return {
      error: true,
      message: "Password must contain at least one lowercase letter",
    };
  }
  if (!hasNumber) {
    return {
      error: true,
      message: "Password must contain at least one number",
    };
  }
  if (!hasSpecialChar) {
    return {
      error: true,
      message: "Password must contain at least one special character",
    };
  }
  return { error: false, message: "" };
};

export const validateConfirmPassword = (
  passwordValue: string,
  confirmPasswordValue: string,
): { error: boolean; message: string } => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(confirmPasswordValue);
  const hasLowercase = /[a-z]/.test(confirmPasswordValue);
  const hasNumber = /[0-9]/.test(confirmPasswordValue);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(confirmPasswordValue);

  if (confirmPasswordValue.length < minLength) {
    return {
      error: true,
      message: `Password must be at least ${minLength} characters`,
    };
  }

  if (!hasUppercase) {
    return {
      error: true,
      message: "Password must contain at least one uppercase letter",
    };
  }

  if (!hasLowercase) {
    return {
      error: true,
      message: "Password must contain at least one lowercase letter",
    };
  }

  if (!hasNumber) {
    return {
      error: true,
      message: "Password must contain at least one number",
    };
  }

  if (!hasSpecialChar) {
    return {
      error: true,
      message: "Password must contain at least one special character",
    };
  }

  if (passwordValue !== confirmPasswordValue && confirmPasswordValue !== "") {
    return {
      error: true,
      message: "Confirm password should match password field",
    };
  }
  return { error: false, message: "" };
};

export const hasErrors = (formState: FormState): boolean => {
  return Object.values(formState).some(field => field.error);
};
