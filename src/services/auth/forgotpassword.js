import axiosInstance from "@/utils/axios-instance";

export const forgotpassword = async ({ email }) => {
  return await axiosInstance.post("/forgotpassword", {
    email,
  });
};
