import axiosInstance from "@/utils/axios-instance";

export const getCandidateById = async (id, accessToken) => {
  const res = await axiosInstance.get(`/candidates/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
