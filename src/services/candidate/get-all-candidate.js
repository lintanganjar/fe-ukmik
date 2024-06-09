import axiosInstance from "@/utils/axios-instance";

export const getAllCandidates = async (accessToken) => {
  const res = await axiosInstance.get(`/candidates/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
