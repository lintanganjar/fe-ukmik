import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { reset } from "@/services/auth/reset";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/section/Footer";

const ResetPassword = () => {
  const formSchema = z.object({
    password: z.string().min(2, {
      message: "password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
      message: "confirm password must be at least 2 characters.",
    }),
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const { password, confirmPassword } = values;

      const res = await reset({ password, confirmPassword });

      const data = res.data;

      if (data) {
        toast({
          title: "Success",
          description: "Create New Password Success",
        });
      }
    } catch (error) {
      toast({
        title: "Failed",
        description: "Create New Password Failed",
      });
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center   ">
      <div className="w-[300px] h-[547px] md:w-[546px] md:h-[799px] shadow-md">
        <div className="h-[5px] bg-[#056BB7] rounded-t-lg"></div>
        <div className="heading flex flex-col justify-center items-center mb-2 mt-[50px]">
          <img
            src="/Aset Key 2.svg"
            alt=""
            className="w-[161px] h-[139px]  mb-[25px] md:w-[318px] md:h-[275px]"
          />
          <h1 className="flex justify-center text-[16px] font-semibold mb-[15px] text-grey-1 md:text-[40px]">
            Create new password
          </h1>
          <p className="flex justify-center text-[10px] text-center text-gray-500 px-2 md:text-[15px]">
            Your previous password has been reseted. Please set a new password
            for your account.
          </p>
        </div>

        <div className="flex justify-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium md:text-[16px]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-[240px]  drop-shadow-sm md:w-[400px]"
                        placeholder="ava.wright@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-[16px]">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-[240px] drop-shadow-sm md:w-[400px]"
                        placeholder="ava.wright@gmail.com"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button
                  className="mt-2 bg-blue-700 w-[240px] h-[40px] md:w-[400px]"
                  type="submit"
                >
                  Create Password
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

export default ResetPassword;
