"use client";

import React, { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "@/services/user/get-user";
import { useQuery } from "react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { updateUser } from "@/services/user/update-user";
import { inputNilai } from "@/services/candidate/input-nilai";
import { getCandidateById } from "@/services/candidate/get-candidate-by-id";

const EditUsers = () => {
  const { id } = useParams();

  const formSchema = z.object({
    nama: z.string().min(2, {
      message: "nama must be at least 2 characters.",
    }),
    jenis_kelamin: z.string(),
    nim: z.string(),
    program_studi: z.string(),
    email: z.string().email(),
    no_telp: z.string(),
    role: z.number(),
    status: z.string(),
    image: z.string().optional(),
    subrole: z.string().optional(),
    lk1: z.coerce
      .number()
      .min(0, { message: "Value must be between 1 and 100" })
      .max(100, { message: "Value must be between 1 and 100" }),
    lk2: z.coerce
      .number()
      .min(0, { message: "Value must be between 1 and 100" })
      .max(100, { message: "Value must be between 1 and 100" }),
    sc: z.coerce
      .number()
      .min(0, { message: "Value must be between 1 and 100" })
      .max(100, { message: "Value must be between 1 and 100" }),
    keaktifan: z.coerce
      .number()
      .min(0, { message: "Value must be between 1 and 100" })
      .max(100, { message: "Value must be between 1 and 100" }),
  });

  const { accessToken } = useAuthStore();
  const { data: user, isLoading } = useQuery(["getuser", id, accessToken], () =>
    getUser(id, accessToken)
  );
  const { data: candidate } = useQuery(["candidate", accessToken], () =>
  getCandidateById(id, accessToken)
);

  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values) => {
    try {
      const {
        nama,
        jenis_kelamin,
        nim,
        program_studi,
        email,
        no_telp,
        status,
        image,
        lk1,
        lk2,
        sc,
        keaktifan,
      } = values;

      const updateUserPayload = {
        nama,
        jenis_kelamin,
        nim,
        program_studi,
        email,
        no_telp,
        status,
        image,
      };

      const nilaiPayload = {
        lk1,
        lk2,
        sc,
        keaktifan,
      };

      const userRes = await updateUser(id, accessToken, updateUserPayload);

      const nilaiRes = await inputNilai(id, accessToken, nilaiPayload);

      if (userRes && nilaiRes) {
        toast({
          title: "Success",
          description: "Edit user successfully",
        });

        window.location.href = "/users";
      }
    } catch (error) {
      toast({
        title: "Failed",
        description: "Failed to edit user",
      });
    }
  };

  // Images
  // State and Refs
  const [imagePreview, setImagePreview] = useState(null);
  const [customText, setCustomText] = useState("Upload");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  // Handlers
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setCustomText("Image Selected");
        setSelectedFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setSelectedFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFullScreenImage = () => {
    setShowImage(true);
  };

  useEffect(() => {
    if (!isLoading) {
      form.setValue("nama", user?.data?.nama);
      form.setValue("jenis_kelamin", user?.data?.jenis_kelamin);
      form.setValue("nim", user?.data?.nim);
      form.setValue("email", user?.data?.email);
      form.setValue("program_studi", user?.data?.program_studi);
      form.setValue("no_telp", user?.data?.no_telp);
      form.setValue("role", user?.data?.role_id);
      form.setValue("status", user?.data?.status);
      form.setValue("lk1", candidate?.data?.lk1);
      form.setValue("lk2", candidate?.data?.lk2);
      form.setValue("sc", candidate?.data?.sc);
      form.setValue("keaktifan", candidate?.data?.keaktifan);
    }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-[298px] lg:w-[954px] md:w-[743px] flex flex-col justify-center  border-2 mt-[54px] mx-auto rounded-md shadow-sm mb-12">
      <section onClick={() => setShowImage(false)} className={`absolute ${showImage ? "block" : "hidden"} w-screen h-[9999px] flex justify-center bg-[#22222278] left-0 top-0 z-50`}>
        <img
          src={import.meta.env.VITE_API_IMAGE_URL + user?.data?.image}
          className="w-auto h-[90vh] mt-8 fixed"
          alt="Preview"
        />
      </section>

      <div className="mx-[12px] md:mx-[42px]">
        <h1 className="font-medium text-[15px] mt-[25px] mb-[14px] md:text-[20px]">
          Edit Users - {user?.data?.nama}
        </h1>
        <span className="flex border border-[#E4E4E7] mb-[28px] md:mb-[47px]"></span>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="md:flex md:justify-between">
                <div className="md:w-[400px]">
                  <FormField
                    control={form.control}
                    name="nama"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Nama Lengkap
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jenis_kelamin"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Jenis Kelamin
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={user?.data?.jenis_kelamin ?? ""}
                            className="flex"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0 bg-primary-11 py-[8px] px-[10px] rounded-md border border-[#E4E4E7]">
                              <FormControl>
                                <RadioGroupItem
                                  value="MALE" // Ubah value ke "MALE"
                                  className="border-2 border-grey-6"
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-[10px] text-grey-6 md:text-[15px]">
                                Laki-Laki
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0 bg-primary-11 py-[8px] px-[10px] rounded-md border border-[#E4E4E7]">
                              <FormControl>
                                <RadioGroupItem
                                  value="FEMALE" // Ubah value ke "FEMALE"
                                  className="border-2 border-grey-6"
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-[10px] text-grey-6 md:text-[15px]">
                                Perempuan
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nim"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          NIM
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nim" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="program_studi"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Prodi
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={user?.data?.program_studi ?? ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Program Studi" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[200px] overflow-y-auto">
                            <SelectGroup>
                              <SelectLabel>S1</SelectLabel>
                              <SelectItem value="Informatika">
                                S1 - Informatika
                              </SelectItem>
                              {/* Tambahkan SelectItem lain sesuai kebutuhan */}
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>D3</SelectLabel>
                              <SelectItem value="Sistem Informasi Akuntansi">
                                D3 - Sistem Informasi Akuntansi
                              </SelectItem>
                              {/* Tambahkan SelectItem lain sesuai kebutuhan */}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="no_telp"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          No. Telepon
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nomor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <h1 className="font-bold text-xl mt-8 mb-4">Total Nilai</h1>
                  <div className="grid grid-cols-4 gap-8">
                    <FormField
                      control={form.control}
                      name="lk1"
                      render={({ field }) => (
                        <FormItem className="md:mb-[20px] mb-[15px]">
                          <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                            LK1
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nilai"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lk2"
                      render={({ field }) => (
                        <FormItem className="md:mb-[20px] mb-[15px]">
                          <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                            LK2
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nilai"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sc"
                      render={({ field }) => (
                        <FormItem className="md:mb-[20px] mb-[15px]">
                          <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                            SC
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nilai"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="keaktifan"
                      render={({ field }) => (
                        <FormItem className="md:mb-[20px] mb-[15px]">
                          <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                            Keaktifan
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nilai"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="md:w-[400px]">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Role
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={user?.data?.role_id.toString() ?? ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[200px] overflow-y-auto">
                            <SelectItem value="1">Super Admin</SelectItem>
                            <SelectItem value="2">Admin</SelectItem>
                            <SelectItem value="3">BPH</SelectItem>
                            <SelectItem value="4">PH</SelectItem>
                            <SelectItem value="5">DPO</SelectItem>
                            <SelectItem value="6">Anggota</SelectItem>
                            <SelectItem value="7">Calon Anggota</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subrole"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Sub Role
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Sub Role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[200px] overflow-y-auto">
                            <SelectGroup>
                              <SelectLabel>- BPH -</SelectLabel>
                              <SelectItem value="ketua">Ketua</SelectItem>
                              <SelectItem value="wakilketua">
                                Wakil Ketua
                              </SelectItem>
                              <SelectItem value="sekretaris">
                                Sekretaris
                              </SelectItem>
                              <SelectItem value="bendahara">
                                Bendahara
                              </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>- PH -</SelectLabel>
                              <SelectItem value="keanggotaan">
                                Keanggotaan
                              </SelectItem>
                              <SelectItem value="pendidikan">
                                Pendidikan
                              </SelectItem>
                              <SelectItem value="minatbakat">
                                Minat dan Bakat
                              </SelectItem>
                              <SelectItem value="humas">
                                Hubungan Masyarakat
                              </SelectItem>
                              <SelectItem value="publikasi">
                                Publikasi
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="md:mb-[20px] mb-[15px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Status
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={user?.data?.status ?? ""}
                            className="flex"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0 bg-primary-11 py-[8px] px-[10px] rounded-md border border-[#E4E4E7]">
                              <FormControl>
                                <RadioGroupItem
                                  value="Active"
                                  className="border-2 border-grey-6"
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-[10px] text-grey-6">
                                Active
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0 bg-primary-11 py-[8px] px-[10px] rounded-md border border-[#E4E4E7]">
                              <FormControl>
                                <RadioGroupItem
                                  value="Inactive"
                                  className="border-2 border-grey-6"
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-[10px] text-grey-6">
                                Inactive
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem className="mb-[15px] md:mb-[20px]">
                        <FormLabel className="font-semibold text-[13px] md:text-[16px]">
                          Upload Image
                        </FormLabel>
                        <FormControl>
                          <div className="flex flex-col gap-4 md:w-[280px]">
                            <div
                              className={`${
                                user?.data?.image
                                  ? "flex flex-col gap-1 items-center border-dashed border-[3px] border-primary-4 rounded-2xl"
                                  : "flex flex-col gap-1 items-center border-dashed border-[3px] border-primary-4 rounded-2xl"
                              }`}
                              onDrop={handleDrop}
                              onDragOver={handleDragOver}
                            >
                              {user?.data?.image ? (
                                <img
                                  onClick={handleFullScreenImage}
                                  src={
                                    import.meta.env.VITE_API_IMAGE_URL +
                                    user?.data?.image
                                  }
                                  alt="Preview"
                                  className="max-w-xs max-h-xs w-1/2 object-cover rounded-lg mt-3"
                                />
                              ) : (
                                <div>
                                  <img
                                    src="/upload_img.svg"
                                    alt=""
                                    className="w-[40px] h-[40px] mx-auto mt-[15px]"
                                  />
                                  <h1 className=""></h1>
                                  <p className="hidden">{customText}</p>
                                </div>
                              )}
                              <h1 className="text-[12px] text-center font-semibold text-[#303030]">
                                Drop & drop an image here
                              </h1>
                              <p className="text-primary-4 text-[12px] font-medium">
                                or browser
                              </p>
                              <Button
                                size="sm"
                                type="button"
                                className={`${
                                  imagePreview
                                    ? "flex items-center py-1 mt-4 mb-2 hover:bg-primary-3 w-8/12 bg-primary-4"
                                    : "flex items-center py-1 bg-primary-4 hover:bg-primary-3 w-8/12 my-2"
                                }`}
                                onClick={() => {
                                  imageRef.current.click();
                                }}
                              >
                                <p className="text-[13px]">
                                  {customText === "Upload"
                                    ? "Upload"
                                    : " Change Picture"}
                                </p>
                              </Button>

                              <Input
                                type="file"
                                accept="image/*"
                                name="image"
                                form="regisForm"
                                ref={imageRef}
                                onChange={handleImageChange}
                                className="py-2 px-4 border hidden border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="submit"
                  className="bg-primary-3 hover:bg-primary-2 mt-5 mb-6"
                  size="sm"
                >
                  Save
                </Button>
                <Button
                  type="reset"
                  onClick={() => navigate("/users")}
                  className="mt-5 mb-6 bg-grey-9 hover:bg-grey-7"
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;
