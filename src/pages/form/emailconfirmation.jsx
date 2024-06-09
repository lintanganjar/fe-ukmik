import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EmailConfirmation = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col mt-[46px] md:mt-[25px] mx-6 md:mx-10">
      <img
        src="/forgot_password.svg"
        alt="forgot_password"
        className="w-[161px] h-[139px] mb-[24px] mx-auto md:w-[318px] md:h-[275px]"
      />
      <h1 className="text-grey-1 text-center font-semibold text-[16px] md:text-[36px]">
        Confirm your email
      </h1>
      <p className="font-normal text-[10px] text-grey-3 opacity-75 text-center mb-[23px] mt-[10px] md:text-[15px] md:mb-[31px]">
        We've sent a verification code to your email. Please enter the code
        below.
      </p>

      <Form>
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-7">
          <FormItem>
            <FormLabel>Verification Code</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter code"
                value={formData.code}
                onChange={handleChange}
                name="code"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <div className="flex justify-center">
            <Button type="button" onClick={prevStep} className="w-full">
              Previous
            </Button>
            <Button type="button" onClick={nextStep} className="w-full">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EmailConfirmation;
