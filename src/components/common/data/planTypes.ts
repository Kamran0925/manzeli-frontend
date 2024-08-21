interface Plan {
  price: number;
  duration: string;
  type: string;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    price: 19,
    duration: "monthly",
    type: "Starter",
    description: "Unleash the power of automation.",
    features: ["Multi-step Zaps", "3 Premium Apps", "2 Users team"],
  },
  {
    price: 54,
    duration: "monthly",
    type: "Professional",
    description: "Advanced tools to take your work to the next level.",
    features: [
      "Multi-step Zaps",
      "Unlimited Premium Apps",
      "50 Users team",
      "Shared Workspace",
    ],
  },
  {
    price: 89,
    duration: "monthly",
    type: "Company",
    description: "Automation plus enterprise-grade features.",
    features: [
      "Multi-step Zap",
      "Unlimited Premium Apps",
      "Unlimited Users Team",
      "Advanced Admin",
      "Custom Data Retention",
    ],
  },
];

export default plans;
