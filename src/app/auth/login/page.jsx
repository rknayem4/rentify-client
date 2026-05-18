"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
    }
    // console.log(user);
  };
  const handleGoogle =async ()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      <div className="w-full max-w-4xl rounded-2xl backdrop-blur-md border border-white/20 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Right Side - Welcome */}
        <div className="hidden md:flex items-center justify-center flex-col p-14 text-[#004078] bg-black/10">
          <h1 className="text-4xl font-extrabold leading-tight mb-6 text-center">
            Welcome Back To Rentify
          </h1>

          <p className="text-black text-lg leading-relaxed text-center">
            Drive your dream car anytime, anywhere. Rentify gives you a smooth,
            secure, and modern car rental experience with premium vehicles at
            affordable prices.
          </p>
        </div>
        {/* Left Side - Form */}
        <div className="flex  flex-col gap-4 p-6 m-3 rounded ">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004078] mb-3">Login</h2>

            <p className="text-gray-600 mb-8">
              Welcome back! Please login to continue.
            </p>
          </div>
          <Form className="space-y-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description className="text-gray-300">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <Button type="submit" className={"bg-[#004078] rounded-md"}>
                <Check />
                Sign Up
              </Button>
              <Button
                type="reset"
                variant="secondary "
                className={"text-[#004078] bg-white rounded-md"}
              >
                Reset
              </Button>
            </div>
          </Form>
          <div className="flex gap-3 justify-center items-center">
            <Separator className="w-2/5" />
            <p className="whitespace-nowrap text-violet-50">Or continue with</p>
            <Separator className="w-2/5" />
          </div>
          <div>
            <Button
            onClick={handleGoogle}
            variant="outline" className={"rounded-none w-full"}>
              <FcGoogle /> Sign In with Google
            </Button>
          </div>
          <p className="text-center">
            I have not an account?{" "}
            <Link className="text-[#004078] font-bold" href={"/auth/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
