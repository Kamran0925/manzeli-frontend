import apiClient from "./apiClient";

export interface RegisterationData {
  [key: string]: string | number | Blob | null | undefined | "";
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

const CLIENT_REGISTRATION_URL = "/api/clients/registration/";

export const clientRegisteration = async (data: any) => {
  const response = await apiClient.post(CLIENT_REGISTRATION_URL, data);
  return response.data;
};
