import axiosInstance from "@/utils/axios-instance";

export const candidateDecision = async (id, accessToken, payload) => {
  const res = await axiosInstance.post(`/candidates/decision/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
