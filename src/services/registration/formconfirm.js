import axiosInstance from "@/utils/axios-instance";

export const formconfirmation = async ({
  nim,
  program_studi,
  fakultas,
  angkatan,
  image,
}) => {
  return await axiosInstance.post("/formconfirmation", {
    nim,
    program_studi,
    fakultas,
    angkatan,
    image,
  });
};
