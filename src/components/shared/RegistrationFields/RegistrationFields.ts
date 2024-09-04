export interface FieldState {
  title: string;
  type: string;
  value: string;
  errorMessage: string;
  disabled: boolean;
  step: number;
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
  profilePicture?: Blob | "";
}

export const RegistrationFields: FormState = {
  username: {
    title: "Full name*",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  email: {
    title: "Email address*",
    type: "email",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  password: {
    title: "Create password*",
    type: "password",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  confirmPassword: {
    title: "Confirm new password",
    type: "confirmPassword",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  isTermsAccepted: false,
  step: 0,
  phone: {
    title: "Phone number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 2,
  },
  address: {
    title: "Your Address",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 2,
  },
  street: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 2,
  },
  city: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 2,
  },
  residence: {
    title: "Country of residence",
    type: "select",
    value: "AE",
    errorMessage: "",
    disabled: false,
    step: 2,
  },
  identity: {
    title: "Tax Identity Number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 2,
  },
  profilePicture: "",
};
