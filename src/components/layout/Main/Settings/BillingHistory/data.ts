// This will be removed once data comes from backend api for billing history

export type Data = {
  invoiceId: number;
  billingDate: string;
  plan: string;
  amount: number;
  status: string;
  downloadInvoice: string;
};

export const data: Data[] = [
  {
    invoiceId: 23456,
    billingDate: "23 Jan 2023",
    plan: "Starter",
    amount: 19,
    status: "Paid",
    downloadInvoice: "Download PDF",
  },
  {
    invoiceId: 23457,
    billingDate: "24 Jan 2023",
    plan: "Professional",
    amount: 54,
    status: "Pending",
    downloadInvoice: "Download PDF",
  },
  {
    invoiceId: 23458,
    billingDate: "24 Jan 2023",
    plan: "Starter",
    amount: 19,
    status: "Paid",
    downloadInvoice: "Download PDF",
  },
  {
    invoiceId: 23459,
    billingDate: "24 Jan 2023",
    plan: "Company",
    amount: 89,
    status: "Paid",
    downloadInvoice: "Download PDF",
  },
];
