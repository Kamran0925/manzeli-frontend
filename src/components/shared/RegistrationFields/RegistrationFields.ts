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
    title: "Your fullname*",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 0,
  },
  email: {
    title: "Email address*",
    type: "email",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 0,
  },
  password: {
    title: "Create password*",
    type: "password",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 0,
  },
  confirmPassword: {
    title: "Confirm new password",
    type: "confirmPassword",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 0,
  },
  isTermsAccepted: false,
  step: -1,
  phone: {
    title: "Phone number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  address: {
    title: "Your Address",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  street: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  city: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  residence: {
    title: "Country of residence",
    type: "select",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  identity: {
    title: "Tax Identity Number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    step: 1,
  },
  profilePicture: "",
};
