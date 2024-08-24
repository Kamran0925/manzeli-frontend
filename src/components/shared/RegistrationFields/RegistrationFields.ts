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
  step: number;
  phone: FieldState;
  address: FieldState;
  street: FieldState;
  city: FieldState;
  residence: FieldState;
  identity: FieldState;
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
  step: 1,
  phone: {
    title: "Phone number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Enter phone number",
  },
  address: {
    title: "Your Address",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Enter address",
  },
  street: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Enter street",
  },
  city: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Enter city",
  },
  residence: {
    title: "Country of residence",
    type: "select",
    value: "AE",
    errorMessage: "",
    disabled: false,
    placeholder: "Please select",
  },
  identity: {
    title: "Tax Identity Number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    placeholder: "Please select",
  },
};
