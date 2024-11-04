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

export const refreshAccessToken = async (refreshToken: string) => {
  const response = await apiClient.post("/api/token/refresh/", {
    refresh: refreshToken,
  });
  return response.data;
};

export interface PasswordResetData {
  email: string;
}

export const resetPassword = async (data: PasswordResetData) => {
  const response = await apiClient.post("/api/password/reset/", data);
  return response.data;
};

export interface PasswordResetConfirmData {
  uid: string | null;
  token: string | null;
  new_password1: string;
  new_password2: string;
}

export const confirmPasswordReset = async (data: PasswordResetConfirmData) => {
  const response = await apiClient.post(
    `/api/password/reset/confirm/${data.uid}/${data.token}/`,
    data,
  );
  return response.data;
};

export interface ChangePasswordData {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

export const changePassword = async (data: ChangePasswordData) => {
  const response = await apiClient.post("/api/users/change-password/", data);
  return response.data;
};
