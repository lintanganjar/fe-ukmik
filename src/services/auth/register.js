import axiosInstance from "@/utils/axios-instance";

export const register = async () => {
  return await axiosInstance.get("/users");
};