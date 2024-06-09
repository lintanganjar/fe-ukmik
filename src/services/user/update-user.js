import axiosInstance from "@/utils/axios-instance";

export const updateUser = async (id, accessToken, payload) => {
  const res = await axiosInstance.put(`/users/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
