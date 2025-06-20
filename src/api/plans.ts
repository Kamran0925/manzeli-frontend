// import apiClient from "./apiClient";
import { subscriptionPlansData } from "./fakeApiResponses";

// const SUBSCRIPTION_PLANS_URL = "/api/platform-admin/subscription-plans/";

export const getSubscriptionPlans = async () => {
  // const originalAuthHeader = apiClient.defaults.headers.common["Authorization"];

  try {
    // delete apiClient.defaults.headers.common["Authorization"];

    // const response = await apiClient.get(SUBSCRIPTION_PLANS_URL);
    const response = subscriptionPlansData;
    return response.data;
  } catch (error) {
    console.error("Error fetching subscription plans:", error);
    throw error;
  } finally {
    // if (originalAuthHeader) {
    //   apiClient.defaults.headers.common["Authorization"] = originalAuthHeader;
    // } else {
    //   delete apiClient.defaults.headers.common["Authorization"];
    // }
  }
};
