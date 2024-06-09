import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { datapersonal } from "@/services/registration/datapersonal";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const DataPersonal = () => {
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
      email: "",
      nama: "",
      jenis_kelamin: "",
      phone: "",
      agama: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const { email, nama, jenis_kelamin, phone, agama } = values;

      const res = await datapersonal({
        email,
        nama,
        jenis_kelamin,
        phone,
        agama,
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
    <div className="flex flex-col mx-[32px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] text-[#09090B]">
                  Email <span className="text-[#DC2626]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan email"
                    className="placeholder:text-grey-7"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] text-[#09090B]">
                  Nama Lengkap <span className="text-[#DC2626]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tulis nama lengkap"
                    className="placeholder:text-grey-7"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Jenis Kelamin <span className="text-[#DC2626]">*</span>
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
                      <FormLabel className="font-normal text-[10px] text-grey-6">
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
                      <FormLabel className="font-normal text-[10px] text-grey-6">
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[13px] text-[#09090B]">
                  No. Telepon <span className="text-[#DC2626]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="(+62)"
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
            name="agama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Agama <span className="text-[#DC2626]">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0 bg-primary-11 py-[8px] px-[8px] rounded-md border border-[#E4E4E7]">
                      <FormControl>
                        <RadioGroupItem value="islam" />
                      </FormControl>
                      <FormLabel className="font-normal text-[10px]">
                        ISLAM
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0 bg-primary-11 py-[8px] px-[8px] rounded-md border border-[#E4E4E7]">
                      <FormControl>
                        <RadioGroupItem value="kristen" />
                      </FormControl>
                      <FormLabel className="font-normal text-[10px]">
                        KRISTEN
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0 bg-primary-11 py-[8px] px-[8px] rounded-md border border-[#E4E4E7]">
                      <FormControl>
                        <RadioGroupItem value="hindu" />
                      </FormControl>
                      <FormLabel className="font-normal text-[10px]">
                        HINDU
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0 bg-primary-11 py-[8px] px-[8px] rounded-md border border-[#E4E4E7]">
                      <FormControl>
                        <RadioGroupItem value="katolik" />
                      </FormControl>
                      <FormLabel className="font-normal text-[10px]">
                        KATOLIK
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
export default DataPersonal;
