"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const level = [
  { name: "Very Mild", id: 1 },
  { name: "Mild", id: 2 },
  { name: "Serious", id: 3 },
  { name: "Severe", id: 4 },
  { name: "Very Severe", id: 5 },
];

const names = level.find((all) => all.name);
// console.log(names?.name)

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IForms {
  input: string;
  menu: string | undefined;
}

const Diagnosis = () => {
  const formObjects = {
    input: "",
    menu: names?.name,
  };
  const [forms, setForms] = useState<IForms[]>([formObjects]);
  const [symptoms, setSymptoms] = useState([]);
  // State to hold input values
  // const [inputs, setInputs] = useState<string[]>([""]); // State to hold input values
  // const [menu, setMenu] = useState<string[]>([""]); // State to hold input values
  // const [description, setDescription] = useState<string[]>([""]); // State to hold input values

  // // Function to add a new input
  const addForm = () => {
    setForms([
      ...forms,
      {
        input: "",
        menu: names?.name,
      },
    ]);
    // setInputs([...inputs, '']);
    // setMenu([...menu, '']);
    // setDescription([...description, ''])
  };

  // Function to handle input value changes
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleInputChange = (
    index: number,
    fieldName: keyof IForms,
    value: string
  ) => {
    const newForms = [...forms];
    newForms[index][fieldName] = value;
    setForms(newForms);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Describe Your Symptoms
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className="mx-auto mt-6 max-w-xl sm:mt-20 p-2 border rounded-lg"
      >
        {forms.map((form, index) => (
          <>
            <div key={index} className="gap-x-8 gap-y-6 sm:grid-cols-2 p-1">
              <div className="flex items-center justify-between gap-1 md:gap-3">
                <div className="full xm:w-3/4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Symptom
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      value={form.input}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) =>
                        handleInputChange(index, "input", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="w-48">
                  <Listbox
                    as="div"
                    value={form.menu}
                    onChange={(value) =>
                      handleInputChange(index, "menu", value)
                    }
                  >
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Severity
                    </label>
                    <div className="relative mt-2.5">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2.5 pl-3 pr-10 text-left border-0 ring-1 ring-inset ring-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{form.menu}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
                          {level.map((person, personIdx) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-violet-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={person.name}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    // onChange={() =>
                                    //   handleInputChange(
                                    //     index,
                                    //     "menu",
                                    //     person.name
                                    //   )
                                    // }
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={addForm}
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Add Symptom
          </button>
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get a Diagnosis
          </button>
        </div>
      </form>
      <br />
      <div>
        <p>
          Hi, I need a medical diagnosis. These are the list of symptoms and
          their Severity
        </p>
        {forms.map((form, index) => (
          <>
            <ul key={index}>
              <li>
                {form.input}: {form.menu}
              </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default Diagnosis;
