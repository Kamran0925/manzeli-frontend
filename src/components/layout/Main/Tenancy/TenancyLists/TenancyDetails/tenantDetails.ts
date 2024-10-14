// This file will be removed once data is provided by Backend API

interface Detail {
  label: string;
  value: string;
}

interface Section {
  title: string;
  details: Detail[];
}

export const tenantDetails: Section[] = [
  {
    title: "Property Details",
    details: [
      { label: "Building/Compound Name:", value: "Palm Residences" },
      { label: "Apartment/Unit number:", value: "Apt. 101" },
    ],
  },
  {
    title: "Payment Details",
    details: [
      { label: "Date submitted:", value: "01/01/2024" },
      { label: "Payment Method:", value: "Cheque" },
    ],
  },
  {
    title: "Tenant Details",
    details: [
      { label: "Tenant Name:", value: "Jessica Taylor" },
      { label: "Ejari/Municipality Reference number:", value: "EJ123456789" },
      { label: "Yearly Rent:", value: "$ 18,000" },
    ],
  },
  {
    title: "Cheque Details",
    details: [
      { label: "Name on Cheque:", value: "Jessica Taylor" },
      { label: "Bank Name:", value: "Wells Fargo" },
    ],
  },
  {
    title: "Lease Details",
    details: [
      { label: "Contract Start Date:", value: "01/01/2024" },
      { label: "Contract End Date:", value: "31/08/2025" },
      { label: "Yearly Rent:", value: "$ 18,000" },
      { label: "Service Charges:", value: "$ 500" },
    ],
  },
];
