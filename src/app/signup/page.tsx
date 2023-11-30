"use client"

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const capitalRegex = /(?=.*[A-Z])/;
const textRegex = /^[a-zA-Z]+$/;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> =  (data) => console.log(data);

  return (
    <div className="h-[100vh]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="logo.png" alt="Sanita" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  placeholder="John"
                  type="text"
                  autoComplete="name"
                  {...register("firstName", {
                    required: "Enter your first name",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 10 ||
                        "First Name cannot be more than 10 characters",
                      pattern: (v) =>
                        (capitalRegex.test(v) && textRegex.test(v)) ||
                        "Must have a capital letter and only text inputs",
                    },
                  })}
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.firstName?.message && (
                  <small className="text-red-500">
                    {errors.firstName.message}
                  </small>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  placeholder="Doe"
                  type="text"
                  autoComplete="name"
                  {...register("lastName", {
                    required: "Enter your last name",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 10 ||
                        "Last Name cannot be more than 10 characters",
                      pattern: (v) =>
                        (capitalRegex.test(v) && textRegex.test(v)) ||
                        "Must have a capital letter and only text inputs",
                    },
                  })}
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.lastName?.message && (
                  <small className="text-red-500">
                    {errors.lastName.message}
                  </small>
                )}
              </div>
            </div>
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
                        emailRegex.test(v) || "Please input a valid email",
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
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
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
                className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
