"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { forgotpassword } from "@/services/auth/forgotpassword";

// components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/section/Footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Icon
import { ChevronLeftIcon } from "lucide-react";
import { Mail } from "lucide-react";

const BACK_TO_LOGIN = "Back to login";

const ForgotPassword = () => {
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
      const { email } = values;

      const res = await forgotpassword({ email });

      const data = res.data;

      if (data) {
        toast({
          title: "Success",
          description: "Password reset instructions sent to your email",
        });
      }
    } catch (error) {
      toast({
        title: "Failed",
        description: "Failed to send password reset instructions",
      });
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="w-[295px] h-[525px] shadow-md rounded-lg md:w-[546px] md:h-[723px]">
        <div className="h-[5px] bg-primary-3 rounded-t-lg"></div>
        <div className="flex justify-between ml-[10px] mr-[28px] mt-[20px]">
          <div className="flex justify-between">
            <Link to="/login" className="flex items-center">
              <ChevronLeftIcon className="w-[18px] text-grey-1 md:w-[24px]" />
              <h1 className="text-[10px] font-medium text-grey-1 md:text-[14px]">
                {BACK_TO_LOGIN}
              </h1>
            </Link>
          </div>
          <img
            src="/logo_ukmik.svg"
            alt="Logo UKM IK"
            width={20}
            className="md:hidden"
          />
        </div>
        <div className="flex flex-col mt-[46px] md:mt-[25px] mx-6 md:mx-10">
          <img
            src="/forgot_password.svg"
            alt="forgot_password"
            className="w-[161px] h-[139px] mb-[24px] mx-auto md:w-[318px] md:h-[275px]"
          />
          <h1 className="text-grey-1 text-center font-semibold text-[16px] md:text-[36px]">
            Forgot your password?
          </h1>
          <p className="font-normal text-[10px] text-grey-3 opacity-75 text-center mb-[23px] mt-[10px] md:text-[15px] md:mb-[31px]">
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 md:space-y-7"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        icon={<Mail className="text-grey-5" />}
                        placeholder="ava.wright@gmail.com"
                        {...field}
                        className="pl-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-primary-3 hover:bg-primary-2 w-full"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <Footer fill={"#AAA"} />
    </div>
  );
};

export default ForgotPassword;
