import axiosInstance from "@/utils/axios-instance";

export const inputNilai = async (id, accessToken, payload) => {
  const res = await axiosInstance.post(`/candidates/input-nilai/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
