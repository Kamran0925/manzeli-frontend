export interface FieldState {
  title: string;
  type: string;
  value: string;
  errorMessage: string;
  disabled: boolean;
  placeholder: string;
}

export interface FormState {
  username: FieldState;
  email: FieldState;
  password: FieldState;
  confirmPassword: FieldState;
  isTermsAccepted: boolean;
}

export const RegistrationFields: FormState = {
  username: {
    title: "Your fullname*",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Enter name",
  },
  email: {
    title: "Email address*",
    type: "email",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Enter email address",
  },
  password: {
    title: "Create password*",
    type: "password",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Your password",
  },
  confirmPassword: {
    title: "Confirm new password",
    type: "confirmPassword",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Confirm new password",
  },
  isTermsAccepted: false,
};
