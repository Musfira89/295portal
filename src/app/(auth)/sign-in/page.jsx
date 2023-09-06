"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInSchema } from "../../../Validations/SignupValidation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function SignIn() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleSubmitForm = async (event) => { 
    event.preventDefault();
    let signInForm = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await signInSchema.isValid(signInForm);
    if (isValid) {
      try {
        const res = await axios.post("/api/auth/sign-in", signInForm);
        console.log("Res of sign-up page is ====", res);
        toast.success("Login Succesfull");
        router.push("/dashboard");
      } catch (error) {
        console.log("error message is====",error) 
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-[#16233d] h-screen">
      <Toaster />
      <h1 className="font-bold text-2xl m-6 text-[#54c2f1] ">
      </h1>
      <form onSubmit={handleSubmitForm}>
        <div className="bg-[#A5C9CA]/25 w-[450px] p-8 px-12">
          <div className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-bold text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                // value={user.email}
                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1C82AD] dark:focus:border-[#1C82AD] outline-none"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-bold text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                // value={user.password}
                // onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1C82AD] dark:focus:border-[#1C82AD] outline-none"
                required
              />
            </div>

            <button
              //   onClick={onLogin}
              className="text-white bg-[#1C82AD] hover:bg-[#186c91] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {buttonDisabled ? "No Login" : "Login"}
            </button>
            <Link
              href={"/sign-up"}
              className="mt-5 text-base font-semibold text-[#91d9f5] hover:underline"
            >
              No Account? | Register here
            </Link>
            <Link
              href={"/reset-password"}
              className="mt-5 text-base font-semibold text-[#91d9f5] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
