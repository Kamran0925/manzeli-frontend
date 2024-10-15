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

export interface LoginData {
  email: string;
  password: string;
}

export const clientRegisteration = async (data: RegisterationData) => {
  const response = await apiClient.post("/api/clients/registration/", data);
  return response.data;
};

export const clientLogin = async (data: LoginData) => {
  const response = await apiClient.post("/api/token/", data);
  return response.data;
};
