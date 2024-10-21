import apiClient from "./apiClient";

const SUBSCRIPTION_PLANS_URL = "/api/platform-admin/subscription-plans/";

export const getSubscriptionPlans = async () => {
  try {
    const response = await apiClient.get(SUBSCRIPTION_PLANS_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscription plans:", error);
    throw error;
  }
};
