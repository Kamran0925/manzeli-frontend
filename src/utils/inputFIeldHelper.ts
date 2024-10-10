import { RegisterationData } from "../api/authApi";

export const getInputType = (
  type: "text" | "password" | "email",
  showPassword: boolean,
): "text" | "password" | "email" => {
  if (type === "password") {
    return showPassword ? "text" : "password";
  }
  return type;
};

export function createFormData(data: RegisterationData): FormData {
  const formData = new FormData();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      if (value !== undefined && value !== null) {
        if (typeof value === "string" || typeof value === "number") {
          formData.append(key, String(value));
        } else if (value instanceof Blob) {
          formData.append(key, value);
        }
      }
    }
  }

  return formData;
}
