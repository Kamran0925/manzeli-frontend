import apiClient from "./apiClient";

export interface RegisterationData {
  client_name: string;
  client_type: string;
  email: string;
  telephone: string;
  street: string;
  city: string;
  country: string;
  logo?: Blob | null | undefined | "";
  product: number;
  billing_cycle: string;
  billing_interval: number;
  contact_name: string;
  username: string;
  password: string;
  password_confirmation: string;
}

export const ClientRegisteration = async (data: RegisterationData) => {
  const response = await apiClient.post("/api/clients/registration/", data);
  return response.data;
};
