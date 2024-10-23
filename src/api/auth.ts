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
  plan: number;
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
