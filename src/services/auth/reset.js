import axiosInstance from "@/utils/axios-instance";

export const reset = async ({ password, confirmPassword }) => {
  return await axiosInstance.post("/reset-password", {
    password,
    confirmPassword,
  });
};