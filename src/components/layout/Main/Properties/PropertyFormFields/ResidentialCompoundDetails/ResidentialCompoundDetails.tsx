import { PropertyFieldConfig } from "../PropertyFieldConfig";

export const ResidentialCompoundDetails: PropertyFieldConfig[] = [
  {
    fieldId: "compoundId",
    fieldLabel: "Compound ID",
    fieldConfig: {
      type: "text",
      placeholder: "#AB-12345",
      value: "",
      validation: { required: true },
      helpText: "Auto-generated",
    },
  },
  {
    fieldId: "localAuthorityID",
    fieldLabel: "Local Authority ID",
    fieldConfig: {
      type: "text",
      placeholder: "LA-98765",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "compoundName",
    fieldLabel: "Compound Name",
    fieldConfig: {
      type: "text",
      placeholder: "Sunshine Compound",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "country",
    fieldLabel: "Country",
    fieldConfig: {
      type: "select",
      placeholder: "UAE",
      options: [{ value: "UAE", label: "United Arab Emirates" }],
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "city",
    fieldLabel: "City",
    fieldConfig: {
      type: "select",
      placeholder: "Dubai",
      options: [{ value: "Dubai", label: "Dubai" }],
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "street",
    fieldLabel: "Street",
    fieldConfig: {
      type: "text",
      placeholder: "Sheikh Zayed Road",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "gpsCoordinates",
    fieldLabel: "GPS Coordinates",
    fieldConfig: {
      type: "text",
      placeholder: "25.2048° N, 55.2708° E",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "numberOfVillas",
    fieldLabel: "Number of Villas",
    fieldConfig: {
      type: "number",
      placeholder: "10",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "numberOfBuildings",
    fieldLabel: "Number of Buildings",
    fieldConfig: {
      type: "number",
      placeholder: "4",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "managementContractExpiry",
    fieldLabel: "Management Contract Expiry",
    fieldConfig: {
      type: "date",
      placeholder: "31/12/2025",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "features",
    fieldLabel: "Features",
    fieldConfig: {
      type: "checkbox",
      value: "",
      validation: { required: false },
      options: [
        { value: false, label: "Gym" },
        { value: false, label: "Swimming Pool" },
        { value: false, label: "CCTV" },
        { value: false, label: "Free Wi-fi" },
        { value: false, label: "Security Guard" },
        { value: false, label: "Terrace" },
      ],
    },
  },
];
