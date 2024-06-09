import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Component
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { formconfirmation } from "@/services/registration/formconfirm";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormConfirmation = () => {
  const phoneRegex = /^\+62\d{9,13}$/;
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    phone: z.string().regex(phoneRegex, "Invalid Number"),
  });

  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nim: "",
      program_studi: "",
      fakultas: "",
      angkatan: "",
      image: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const { nim, program_studi, fakultas, angkatan, image } = values;

      const res = await formconfirmation({
        nim,
        program_studi,
        fakultas,
        angkatan,
        image,
      });

      const data = res.data;
      if (data) {
        toast({
          title: "Success",
          description: "Data Valid",
        });
      }
    } catch (error) {
      toast({
        title: "Failed",
        description: "Data Invalid",
      });
    }
  };

  return (
    <div className="">
      <div className="flex flex-col mx-[32px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="nim"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] text-[#09090B]">
                    NIM <span className="text-[#DC2626]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukan nim"
                      {...field}
                      className="placeholder:text-grey-7"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="program_studi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Program Studi <span className="text-[#DC2626]">*</span>
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
                        <SelectItem value="if">S1 Informatika</SelectItem>
                        <SelectItem value="si">S1 Sistem Informasi</SelectItem>
                        <SelectItem value="tk">S1 Teknik Komputer</SelectItem>
                        <SelectItem value="mr">S1 Manajemen Ritel</SelectItem>
                        <SelectItem value="bd">S1 Bisnis Digital</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>D3</SelectLabel>
                        <SelectItem value="sia">
                          Sistem Informasi Akuntansi
                        </SelectItem>
                        <SelectItem value="tekom">
                          Teknologi Komputer
                        </SelectItem>
                        <SelectItem value="rpla">
                          Rekayasa Perangkat Lunak Aplikasi
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
              name="fakultas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Fakultas <span className="text-[#DC2626]">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Fakultas" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fti">
                        Fakultas Teknologi Informasi
                      </SelectItem>
                      <SelectItem value="fmb">
                        Fakultas Manajemen dan Bisnis
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="angkatan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] text-[#09090B]">
                    Angkatan <span className="text-[#DC2626]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukan angkatan"
                      className="placeholder:text-grey-7 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload Photo <span className="text-[#DC2626]">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-col justify-center items-center w-[180px] h-[119px] border-dashed border-[3px] border-grey-8 rounded-md">
                      <img
                        src="/upload_file.svg"
                        alt=""
                        className="w-[40px] h-[40px]"
                      />
                      <div className="flex justify-center items-center bg-[#3DA7DE] rounded-md py-[7px] px-2 gap-1 cursor-pointer hover:bg-primary-5">
                        <img
                          src="/file_add.svg"
                          alt=""
                          className="w-[14px] h-[14px] "
                        />
                        <p className="text-[10px] text-white ">Upload Photo</p>
                      </div>

                      <p className="mt-[8px] text-[8px]">or Drop File Here</p>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
export default FormConfirmation;
