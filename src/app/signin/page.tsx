"use client"

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";

interface IFormInput {
  email: string;
  password: string;
}

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex h-[100vh] min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="logo.png" alt="Sanita" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit((d) => console.log(d))}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                placeholder="email@example.com"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    matchPattern: (v) =>
                      regex.test(v) || "Please input a valid email",
                    maxLength: (v) =>
                      v.length <= 50 ||
                      "Email cannot be more than 50 characters",
                  },
                })}
                className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email?.message && (
                <small className="text-red-500">{errors.email.message}</small>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-violet-600 hover:text-violet-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                placeholder="••••••••"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    minLength: (v) =>
                      v.length >= 9 ||
                      "Password must not be less than 8 characters",
                  },
                })}
                className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
              />
              {errors.password?.message && (
                <small className="text-red-500">
                  {errors.password.message}
                </small>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={()=>signIn()}
              className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont have an account?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-violet-600 hover:text-violet-500"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
