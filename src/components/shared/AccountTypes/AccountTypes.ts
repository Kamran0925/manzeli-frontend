export const INDIVIDUAL_PROPERTY_OWNER = "Individual Property Owner";
export const PROPERTY_MANAGEMENT_FIRM = "Property Management Firm";

type AccountType = {
  title: string;
  description: string;
};

export const accountTypes: AccountType[] = [
  {
    title: PROPERTY_MANAGEMENT_FIRM,
    description:
      "Register as a property management company to oversee multiple properties and streamline your business operations",
  },
  {
    title: INDIVIDUAL_PROPERTY_OWNER,
    description:
      "Register as a landlord to manage your individual rental properties efficiently.",
  },
];

export const clientTypes: { [key: string]: string } = {
  [INDIVIDUAL_PROPERTY_OWNER]: "010",
  [PROPERTY_MANAGEMENT_FIRM]: "020",
};
