import axiosInstance from "@/utils/axios-instance";

export const getUser = async (id, accessToken) => {
  const res = await axiosInstance.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
