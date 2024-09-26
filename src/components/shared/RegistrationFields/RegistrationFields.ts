export interface FieldState {
  title: string;
  type: string;
  value: string;
  errorMessage: string;
  disabled: boolean;
  companyFlowStep: number | null;
  individualFlowStep: number | null;
}

export interface FormState {
  accountType: string;
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
  company: FieldState;
  website: FieldState;
  profilePicture?: Blob | "" | undefined;
}

export const RegistrationFields: FormState = {
  accountType: "",
  username: {
    title: "Full name*",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 3,
    individualFlowStep: 2,
  },
  email: {
    title: "Email address*",
    type: "email",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 3,
    individualFlowStep: 2,
  },
  password: {
    title: "Create password*",
    type: "password",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 3,
    individualFlowStep: 2,
  },
  confirmPassword: {
    title: "Confirm new password",
    type: "password",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 3,
    individualFlowStep: 2,
  },
  isTermsAccepted: false,
  step: 0,
  phone: {
    title: "Phone number",
    type: "phone",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: null,
    individualFlowStep: 3,
  },
  address: {
    title: "Your Address",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 2,
    individualFlowStep: 3,
  },
  street: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 2,
    individualFlowStep: 3,
  },
  city: {
    title: "",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 2,
    individualFlowStep: 3,
  },
  residence: {
    title: "Country of residence",
    type: "select",
    value: "AE",
    errorMessage: "",
    disabled: false,
    companyFlowStep: null,
    individualFlowStep: 3,
  },
  identity: {
    title: "Tax Identity Number",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: null,
    individualFlowStep: 3,
  },
  company: {
    title: "Company Name",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 2,
    individualFlowStep: null,
  },
  website: {
    title: "Website",
    type: "text",
    value: "",
    errorMessage: "",
    disabled: false,
    companyFlowStep: 2,
    individualFlowStep: null,
  },
  profilePicture: "",
};
