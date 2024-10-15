export interface Plan {
  id: number;
  name: string;
  price: string;
  billing_cycle: string;
  memo: string;
  created_at: string;
  updated_at: string;
}

//This will be removed once plans data comes from backend api

const plans: Plan[] = [
  {
    id: 1,
    name: "Starter",
    price: "19.00",
    billing_cycle: "010",
    memo: "Unleash the power of automation",
    created_at: "2024-10-09T12:29:06Z",
    updated_at: "2024-10-09T12:29:06Z",
  },
  {
    id: 2,
    name: "Professional",
    price: "54.00",
    billing_cycle: "010",
    memo: "Advanced tools to take your work to the next level.",
    created_at: "2024-10-09T12:30:20Z",
    updated_at: "2024-10-09T12:30:20Z",
  },
  {
    id: 3,
    name: "Company",
    price: "89.00",
    billing_cycle: "010",
    memo: "Automation plus enterprise grade features.",
    created_at: "2024-10-09T12:30:54Z",
    updated_at: "2024-10-09T12:30:54Z",
  },
];

export default plans;
