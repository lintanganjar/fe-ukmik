import axiosInstance from "@/utils/axios-instance";

export const datapersonal = async ({
  email,
  nama,
  phone,
  jenis_kelamin,
  agama,
}) => {
  return await axiosInstance.post("/datapersonal", {
    email,
    nama,
    phone,
    jenis_kelamin,
    agama,
  });
};
