"use client";

import React, { useState, useRef, Fragment, Dispatch, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface IFormInput {
  email: string;
  password: string;
}

export const Signin = ({ showSignin }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  // const [emailInput, setEmailInput] = useState("");

  let [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  return (
    <>
      {showSignin ? (
        <>
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              id="signin"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={()=>setOpen(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                          <div className="ml-3 relative flex flex-col-reverse h-7 items-end">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>

                          <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                          />
                          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                          </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                          <form
                            className="space-y-6"
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
                                      pattern:
                                        regex.test ||
                                        "Please input a valid email",
                                      maxLength: (v) =>
                                        v.length <= 50 ||
                                        "Email cannot be more than 50 characters",
                                    },
                                  })}
                                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email?.message && (
                                  <small>{errors.email.message}</small>
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
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
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
                                  {...register("password", { minLength: 4 })}
                                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Sign in
                              </button>
                            </div>
                          </form>

                          <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{" "}
                            <a
                              href="#"
                              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                              Start a 14 day free trial
                            </a>
                          </p>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      ) : null}
    </>
  );
};
