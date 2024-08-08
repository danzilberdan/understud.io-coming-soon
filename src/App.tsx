import { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function App() {
  const [signedUp, _] = useState(false);

  return (
    <main className="isolate">
      <div className="relative pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[28rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FAD03B] to-[#CE5700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[64rem]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
                🏗️ In the making 🏗️
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Understud.io will be launching soon!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are working to bring you amazing software courses.
                Level up your skills and open doors to new opportunities.
                Our instuctors are highly experienced engineers from top companies working on unique challanges.
              </p>
            </div>
          </div>
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {signedUp ? (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      You're on the waitlist! 🥳
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>We'll let you know when we're ready to launch.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative isolate overflow-hidden bg-neutral-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Stay in the loop
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                  Sign up to get notified when we launch.
                </p>
                <form
                  method="post" action="https://listmonk.danz.blog/subscription/form" 
                  className="mx-auto mt-10 flex max-w-md gap-x-4 flex-wrap"
                >
                  <div className="captcha mb-4">
                      <div className="h-captcha" data-sitekey="a7c0ddd0-ef70-4f7c-8684-ed2c22329a44"></div>
                  </div>

                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input type="hidden" name="nonce" />
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />

                  <p className="hidden">
                    <input id="8c590" type="checkbox" name="l" checked value="8c590d10-d8bf-42d7-871d-2791198f3513" />
                    <label htmlFor="8c590">Understud.io Coming Soon</label>
                  </p>
                  
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Notify me
                  </button>
                  <svg
                    className="pointer-events-none absolute right-0 h-48 w-48 -translate-y-3/4 select-none opacity-15 sm:h-96 sm:w-96 sm:-translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="50%"
                      y="50%"
                      fontSize="20"
                      fill="currentColor"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      🚀
                    </text>
                  </svg>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
