import { PropertyFieldConfig } from "../PropertyFieldConfig";

export const ApartmentBuildingDetails: PropertyFieldConfig[] = [
  {
    fieldId: "buildingId",
    fieldLabel: "Building Id",
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
    fieldId: "contractType",
    fieldLabel: "Contract Type",
    fieldConfig: {
      type: "text",
      placeholder: "Management",
      value: "",
      validation: { required: true },
      helpText: "Auto-generated",
    },
  },
  {
    fieldId: "electricityAndWaterRegisteredNumber",
    fieldLabel: "Electricity and Water Registered Number",
    fieldConfig: {
      type: "text",
      placeholder: "EW-456789",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "buildingName",
    fieldLabel: "Building Name",
    fieldConfig: {
      type: "text",
      placeholder: "Sunrise Apartments",
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
      value: "",
      validation: { required: true },
      options: [{ value: "UAE", label: "United Arab Emirates" }],
    },
  },
  {
    fieldId: "city",
    fieldLabel: "City",
    fieldConfig: {
      type: "select",
      placeholder: "Dubai",
      value: "",
      validation: { required: true },
      options: [{ value: "Dubai", label: "Dubai" }],
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
    fieldId: "numberOfFloors",
    fieldLabel: "Number of Floors",
    fieldConfig: {
      type: "number",
      placeholder: "12",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "numberOfApartments",
    fieldLabel: "Number of Apartments",
    fieldConfig: {
      type: "number",
      placeholder: "48",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "commercialSpaces",
    fieldLabel: "Commercial Spaces",
    fieldConfig: {
      type: "number",
      placeholder: "4",
      value: "",
      validation: { required: true },
    },
  },
  {
    fieldId: "numberOfParkingSpaces",
    fieldLabel: "Number of Parking Spaces",
    fieldConfig: {
      type: "number",
      placeholder: "60",
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
        { value: false, label: "Air conditioning" },
        { value: false, label: "Security Guard" },
        { value: false, label: "Terrace" },
      ],
    },
  },
];
