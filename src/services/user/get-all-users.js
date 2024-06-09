import axiosInstance from "@/utils/axios-instance";

export const getAllUsers = async (accessToken) => {
  const res = await axiosInstance.get("/users", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
