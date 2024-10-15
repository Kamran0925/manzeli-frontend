export const getInputType = (
  type: "text" | "password" | "email",
  showPassword: boolean,
): "text" | "password" | "email" => {
  if (type === "password") {
    return showPassword ? "text" : "password";
  }
  return type;
};
