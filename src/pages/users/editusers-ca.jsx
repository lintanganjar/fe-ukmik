"use client";

import React, { useRef, useState } from "react";
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
import { Label } from "@/components/ui/label";

const EditUsers = () => {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const {
        nama,
        jenis_kelamin,
        nim,
        prodi,
        email,
        notelp,
        role,
        subrole,
        status,
        image,
      } = values;

      const res = await forgotpassword({
        nama,
        jenis_kelamin,
        nim,
        prodi,
        email,
        notelp,
        role,
        subrole,
        status,
        image,
      });

      const data = res.data;

      if (data) {
        toast({
          title: "Success",
          description: "Edit user successfully",
        });
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

  return (
    <div className="w-[298px] lg:w-[954px] md:w-[743px] flex flex-col justify-center  border-2 mt-[54px] mx-auto rounded-md shadow-sm mb-12">
      <div className="mx-[12px] md:mx-[42px]">
        <h1 className="font-medium text-[15px] mt-[25px] mb-[14px] md:text-[20px]">
          Edit Users - Aji Susanto
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
                            defaultValue={field.value}
                            className="flex"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0 bg-primary-11 py-[8px] px-[10px] rounded-md border border-[#E4E4E7]">
                              <FormControl>
                                <RadioGroupItem
                                  value="1"
                                  className="border-2 border-grey-6"
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-[10px] md:text-[15px] text-grey-6">
                                Laki-Laki
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0 bg-primary-11 py-[8px] px-[10px] rounded-md border border-[#E4E4E7]">
                              <FormControl>
                                <RadioGroupItem
                                  value="2"
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
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Program Studi" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[200px] overflow-y-auto">
                            <SelectGroup>
                              <SelectLabel>S1</SelectLabel>
                              <SelectItem value="if">
                                S1 - Informatika
                              </SelectItem>
                              <SelectItem value="si">
                                S1 - Sistem Informasi
                              </SelectItem>
                              <SelectItem value="tk">
                                S1 - Teknik Komputer
                              </SelectItem>
                              <SelectItem value="mr">
                                S1 - Manajemen Ritel
                              </SelectItem>
                              <SelectItem value="bd">
                                S1 - Bisnis Digital
                              </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>D3</SelectLabel>
                              <SelectItem value="sia">
                                D3 - Sistem Informasi Akuntansi
                              </SelectItem>
                              <SelectItem value="tekom">
                                D3 - Teknologi Komputer
                              </SelectItem>
                              <SelectItem value="rpla">
                                D3 - Rekayasa Perangkat Lunak Aplikasi
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div>
                    <Label className="font-semibold text-[13px] md:text-[16px]">
                      Total Nilai
                    </Label>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="nilai_lk1"
                        render={({ field }) => (
                          <FormItem className="md:mb-[20px] mb-[15px] w-[45px] md:w-[55px]">
                            <FormLabel className="text-[10px] md:text-[14px]">
                              LK1
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-[#E4E4E7] drop-shadow-md"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nilai_lk2"
                        render={({ field }) => (
                          <FormItem className="md:mb-[20px] mb-[15px] w-[45px] md:w-[55px]">
                            <FormLabel className=" text-[10px] md:text-[14px]">
                              LK2
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-[#E4E4E7] drop-shadow-md"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nilai_sc"
                        render={({ field }) => (
                          <FormItem className="md:mb-[20px] mb-[15px] w-[60px] md:w-[80px]">
                            <FormLabel className=" text-[10px] md:text-[14px]">
                              Study Club
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-[#E4E4E7] drop-shadow-md"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nilai_aktif"
                        render={({ field }) => (
                          <FormItem className="md:mb-[20px] mb-[15px] w-[45px] md:w-[55px]">
                            <FormLabel className="text-[10px] md:text-[14px]">
                              Keaktifan
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-[#E4E4E7] drop-shadow-md"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-[400px]">
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
                    name="nope"
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
                                imagePreview
                                  ? "flex flex-col gap-1 items-center border-dashed border-[3px] border-primary-4 rounded-2xl"
                                  : "flex flex-col gap-1 items-center border-dashed border-[3px] border-primary-4 rounded-2xl"
                              }`}
                              onDrop={handleDrop}
                              onDragOver={handleDragOver}
                            >
                              {imagePreview ? (
                                <img
                                  src={imagePreview}
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
