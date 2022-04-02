import React from 'react'

import { CheckIcon } from '@heroicons/react/outline'

const Pricing = () => {
  return (
    <div name="pricing" className="my-24 w-full text-white">
      <div className="absolute h-[800px] w-full bg-slate-900 mix-blend-overlay"></div>

      <div className="mx-auto max-w-[1240px] py-12">
        <div className="py-8 text-center text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="py-8 text-5xl font-bold text-white">
            The right price for you
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            dolores ullam minus eveniet ab vitae
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
            <span className="rounded-2xl bg-blue-200 px-3 py-1 text-sm uppercase text-blue-900">
              Standard
            </span>
            <div>
              <p className="flex py-4 text-6xl font-bold">
                $49
                <span className="flex flex-col justify-end text-xl text-slate-500">
                  /mo
                </span>
              </p>
            </div>
            <p className="py-8 text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="relative text-2xl">
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="my-4 w-full py-4">Get Started</button>
            </div>
          </div>

          <div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
            <span className="rounded-2xl bg-blue-200 px-3 py-1 text-sm uppercase text-blue-900">
              Standard
            </span>
            <div>
              <p className="flex py-4 text-6xl font-bold">
                $199
                <span className="flex flex-col justify-end text-xl text-slate-500">
                  /mo
                </span>
              </p>
            </div>
            <p className="py-8 text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="relative text-2xl">
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="mr-5 w-8 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="my-4 w-full py-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
