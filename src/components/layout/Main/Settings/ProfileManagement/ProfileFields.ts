interface ValidationConfig {
  required: boolean;
}

export interface ProfileFieldConfig {
  fieldId: string;
  fieldLabel: string;
  fieldConfig: {
    type: "text" | "number" | "email" | "password";
    placeholder?: string;
    value: any;
    validation?: ValidationConfig;
    additional?: {
      helpText?: string;
      link?: string;
    };
  };
}

export const ProfileFields: { [key: string]: ProfileFieldConfig[] } = {
  "Personal Details": [
    {
      fieldId: "firstName",
      fieldLabel: "First Name:",
      fieldConfig: {
        type: "text",
        placeholder: "Luke",
        value: "",
        validation: { required: true },
      },
    },
    {
      fieldId: "lastName",
      fieldLabel: "Last Name:",
      fieldConfig: {
        type: "text",
        placeholder: "Warm",
        value: "",
        validation: { required: true },
      },
    },
    {
      fieldId: "email",
      fieldLabel: "Email:",
      fieldConfig: {
        type: "email",
        placeholder: "lukewarm@gmail.com",
        value: "",
        validation: { required: true },
        additional: {
          helpText: "Change Email",
          link: "/change-email",
        },
      },
    },
    {
      fieldId: "phoneNumber",
      fieldLabel: "Phone Number:",
      fieldConfig: {
        type: "number",
        placeholder: "+151 8987678867",
        value: "",
        validation: { required: true },
      },
    },
  ],
  Security: [
    {
      fieldId: "password",
      fieldLabel: "Password:",
      fieldConfig: {
        type: "password",
        placeholder: "pass1234",
        value: "",
        validation: { required: true },
        additional: {
          helpText: "Change Password",
          link: "/change-password",
        },
      },
    },
  ],
};
