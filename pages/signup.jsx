import React from 'react'

const SignUp = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-gray-800 to-blue-600">
        <div className="mx-auto max-w-6xl py-24 px-8 sm:px-0">
          <div className="text-center">
            <h1 className="text-center text-5xl text-white">Welcome</h1>
            <p className="mt-3 text-xl text-white">Register</p>
            <div className="mt-6 flex w-full justify-center space-x-4">
              <button className="bg-blue-500 py-2 px-4" type="submit">
                Login
              </button>{' '}
              <button className="bg-blue-500 py-2 px-4" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-gray-200">
        <div className="mx-auto max-w-6xl px-8 py-10 sm:px-0">
          <div className="flex justify-center">
            <form className="rounded-lg p-5 px-8 pt-6 pb-8 shadow-md">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-blue-700">
                  <svg
                    className="absolute h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="mb-5 flex items-center rounded-full border py-3 pl-10 pr-5 align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Full name"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3 text-blue-700">
                  <svg
                    className="absolute h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="mb-5 flex items-center rounded-full border py-3 pl-10 pr-5 align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none"
                  type="Password"
                  placeholder="Mobile/Phone number"
                />
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-blue-700">
                  <svg
                    className="absolute h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="mb-5 flex items-center rounded-full border py-3 pl-10 pr-5 align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none"
                  type="Password"
                  placeholder="Type your new password"
                />
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-blue-700">
                  <svg
                    className="absolute h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="mb-5 flex items-center rounded-full border py-3 pl-10 pr-5 align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none"
                  type="Password"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-blue-700">
                  <svg
                    className="absolute h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="mb-5 flex items-center rounded-full border py-3 pl-10 pr-5 align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none"
                  type="Password"
                  placeholder="Select location"
                />
              </div>

              <div className="rounded-md bg-white p-2 py-5">
                <div className="flex items-center">
                  <input
                    id="terms-and-privacy"
                    name="terms-and-privacy"
                    type="checkbox"
                    className=""
                  />
                  <label
                    for="terms-and-privacy"
                    className="ml-2 block text-sm font-bold text-gray-900"
                  >
                    Monthly Subscription
                  </label>
                </div>
                <div className="">
                  <p className="mt-3 break-normal">
                    You don't have to pay for every order after{' '}
                  </p>
                  <p>subscribing for a $50 monthly to enjoy</p>
                </div>
                <div className="text-blue-500">
                  <p>-5 Pick-ups and deliveries</p>
                  <p>-90Kgs of wash & fold</p>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="rounded-lg bg-blue-400 px-10 py-2 text-white">
                  SIGNUP
                </button>
              </div>

              <div className="mb-15 mx-auto mt-10 max-w-lg text-center">
                <p>
                  Have an account?
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:text-blue-900 hover:underline"
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignUp
