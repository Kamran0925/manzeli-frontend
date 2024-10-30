interface ValidationConfig {
  required: boolean;
}

export interface PropertyFieldConfig {
  fieldId: string;
  fieldLabel: string;
  fieldConfig: {
    type:
      | "text"
      | "number"
      | "select"
      | "checkbox"
      | "date"
      | "email"
      | "password";
    placeholder?: string;
    value: any;
    validation?: ValidationConfig;
    options?: { value: any; label: string }[];
    helpText?: string;
    link?: string;
  };
}
