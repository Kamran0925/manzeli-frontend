import apiClient from "./apiClient";

const PROPERTY_URL = "/api/property-management/properties/";

export const getProperties = async () => {
  try {
    const response = await apiClient.get(PROPERTY_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export const createProperty = async (propertyData: any) => {
  try {
    const response = await apiClient.post(PROPERTY_URL, propertyData);
    console.log("Property created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create property:", error);
    throw error;
  }
};

export const deleteProperty = async (propertyId: number) => {
  try {
    await apiClient.delete(`${PROPERTY_URL}${propertyId}/`);
    console.log(`Property with ID ${propertyId} deleted successfully.`);
  } catch (error) {
    console.error("Failed to delete property:", error);
  }
};
