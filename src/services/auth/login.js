import axiosInstance from "@/utils/axios-instance";

export const login = async ({ username, password }) => {
  return await axiosInstance.post("/login", {
    username,
    password,
  });
};