import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControl,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { login } from "@/services/auth/login";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthStore } from "@/stores/useAuthStore";

const Login = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "password must be at least 2 characters.",
    }),
  });
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { accessToken, doLogin } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;

      const res = await doLogin({ username, password });

      console.log(res);

      if (res) {
        toast({
          title: "Success",
          description: "Login Success",
        });
      }

      navigate('/users');
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed",
        description: "Login Failed",
      });
    }
  };

  // condition for carousal
  const plugin = React.useRef(
    Autoplay({ loop: true, delay: 5000, stopOnInteraction: true })
  );
  //content image carousel
  const image = [`/login1.svg`, `/login2.svg`, `/login3.svg`];

  //content text carousel
  const text1 = [
    "Hello, Friend",
    "Check Your Project Progres",
    "Pour Your Briliant Ideas",
  ];
  const text2 = [
    "Enter your credentials to start exploring our world.",
    "Get a Quick Insight into Your Progress. Login Now!",
    'Unleash your creativity and let the brilliance flow as you embark on a journey of innovative ideas."',
  ];

  React.useEffect(() => {
    if(accessToken || accessToken !== null) {
      navigate('/users');
    }
  }, []);
  return (
    <div className="container flex justify-center flex-col   md:flex-row-reverse md:justify-between md:items-center  ">
      <div className="heading  md:h-[520px] md:w-full  flex lg:h-[620px] lg:w-[700px] justify-center items-center ">
        {/* start carousal */}
        <Carousel
          plugins={[plugin.current]}
          className="p-0 md:w-full justify-center lg:w-full flex flex-col items-center"
          onMouseEnter={plugin.current ? plugin.current.play : undefined}
          onMouseLeave={plugin.current ? plugin.current.play : undefined}
          options={{ loop: true, draggable: false }}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="flex justify-center ">
                <div className="Carousal-Content flex justify-center md:w-10/12  lg:w-full items-center p-0 m-0 ">
                  <Card className="p-0 md:w-full  shadow-none border-none ">
                    <CardContent className=" flex flex-col items-center justify-center text-center ">
                      <span className="">
                        <img
                          src={image[index]}
                          className="w-[229px] h-[164px]   md:w-[400px] md:h-[312px] lg:w-[512px] lg:h-[412px] "
                          alt=""
                        />
                      </span>
                      <p className="hidden ... md:flex text-[32px] font-medium leading-[48px]">
                        {text1[index]}
                      </p>
                      <p className="hidden ... md:flex text-center">
                        {text2[index]}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="navi flex justify-center   items-center md:mr-3">
            <CarouselControl
              items={image}
              className="hidden ... md:flex bg-black"
            />
          </div>
        </Carousel>
      </div>
      <div className="form  lg:h-[380px] md:h-[420px] md:gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="welcome flex">
              <p className="leading-[48px] text-[32px] font-bold mt-4 mb-7 mx-auto md:text-[40px]">
                Welcome back
              </p>
            </div>
            <FormField
              className=""
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-center items-center">
                  <FormControl className="h-14 min-w-[250px] md:w-[320px] lg:w-[512px]">
                    <Input placeholder="Username " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-center items-center ">
                  <FormControl className="h-14 min-w-[250px] md:w-[320px] lg:w-[512px]">
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center gap-3 pt-5 flex-col   fitur-login md:h-[140px]">
              <div className="fitur-top h-9 w-[250px] md:w-full  items-center flex justify-between ">
                <div className="chekbox flex ml-4 items-center justify-center">
                  <Checkbox className="flex pl-[2px] justify-center items-center size-[10px] md:size-[14px]" />
                  <label
                    htmlFor="terms"
                    className="text-[10px] leading-[15px] pl-2 md:pl-1 text-gray-800 font-normal lg:text-[14px] lg:leading-[21px] md:text-[10px]  md:leading-[17px]"
                  >
                    keep me logged in
                  </label>
                </div>
                <div className="forgot-password flex ">
                  <Link
                    to="/forgot-password"
                    className="underline decoration-1 text-[10px] leading-[15px] pl-2 text-gray-800 font-medium md:text-[12px] md:leading-[19px] lg:text-[14px] lg:leading-[21px]"
                  >
                    forgot Pasword ?
                  </Link>
                </div>
              </div>
              <Button
                className="bg-primary-3 w-[250px] md:w-[320px] lg:w-[512px] hover:bg-blue-800"
                type="submit"
              >
                Log in
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Login;
