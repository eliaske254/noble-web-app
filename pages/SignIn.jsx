import React from 'react'
import { Button } from 'react-scroll'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

const SignIn = () => {
  return (
    <div className="flex h-screen flex-col justify-center bg-blue-500">
      <div className=" flex h-[40vh] w-screen justify-center bg-gradient-to-r from-gray-800 to-blue-600">
        <div className="flex w-[50vw] flex-col items-center justify-center">
          <h1 className="mb-5 text-center text-5xl text-white">Welcome</h1>
          <h2 className="mb-10 text-7xl text-white">Account Login</h2>
          <div className="flex w-full justify-center">
            <div className="flex w-[200px] space-x-4">
              <button className="bg-blue-500 py-2 px-4" type="submit">
                Login
              </button>
              <button className="bg-blue-500 py-2 px-4" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[60vh] w-screen  justify-center bg-white ">
        <div className="flex w-[50vw] flex-col items-center">
          <form className="m-10 rounded bg-white p-10 px-8 pt-6 pb-8 shadow-md">
            <div className="mb-8 flex items-center rounded-lg border align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none">
              <FaUser className="bg-gradient rounded-lg pl-2 text-gray-400 " />
              <input
                type="text"
                placeholder="Username"
                className="focus:shadow-otline w-full appearance-none rounded py-2 px-2 leading-tight text-gray-700 focus:outline-none "
              />
            </div>

            <div className="mb-8 flex items-center rounded-lg border align-middle text-gray-700 shadow focus:border-blue-500 focus:outline-none">
              <FaLock className="bg-gradient rounded-lg pl-2 text-gray-400 " />
              <input
                type="password"
                placeholder="Password"
                className="focus:shadow-otline w-full appearance-none rounded py-2 px-2 leading-tight text-gray-700 focus:outline-none "
              />
            </div>

            <div className="flex items-center justify-between pt-10">
              <button className="bg-blue-500 py-2 px-4" type="submit">
                Login
              </button>

              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-900 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="mb-15 mx-auto mt-10 max-w-lg text-center">
              <p>
                Don't have an account?{' '}
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:text-blue-900 hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
