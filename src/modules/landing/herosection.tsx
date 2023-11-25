import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8" id="#">
      <img
        src="https://www.westinjurylawyers.com/wp-content/uploads/2017/06/Doctor-giving-femal-patient-second-opinion-6.9.17-4.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-gray-900 brightness-[30%]"
      />
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-normal text-gray-200 sm:text-6xl">
            Cutting-Edge Diagnosis with AI-Driven Symptom Analysis
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Revolutionize diagnosis with AI-driven symptom analysis to delivers precise assessments, leveraging advanced algorithms for accurate insights. Experience informed
            healthcare decisions and personalized treatments at your fingertips.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/diagnosis"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get a Diagnosis
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-400"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
};
