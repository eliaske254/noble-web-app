import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

// import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div name="support" className="mt-24 w-full">
      <div className="absolute h-[700px] w-full bg-gray-900/90">
        <img
          className="h-full w-full object-cover mix-blend-overlay"
          src="/team.jpg"
          alt="/"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] text-white">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-center text-3xl uppercase text-slate-300">
            Support
          </h2>
          <h3 className="py-6 text-center text-5xl font-bold">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quibusdam nesciunt minus accusantium velit libero dolorum, quidem
            numquam nostrum quas.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 px-12 text-black sm:pt-20 lg:grid-cols-3">
          <div className="rounded-xl bg-white shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="mt-[-4rem] w-16 rounded-lg bg-blue-500 p-4 text-white" />
              <h3 className="my-6 text-2xl font-bold">Sales</h3>
              <p className="text-xls text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                tenetur non facilis dolores dolorum corporis omnis totam
                laudantium minus quidem! Nisi suscipit labore exercitationem! Et
                accusantium sunt dicta facere laborum.
              </p>
            </div>
            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-blue-500">
                Contact Us <ArrowSmRightIcon className="ml-2 w-5" />
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white shadow-2xl">
            <div className="p-8">
              <SupportIcon className="mt-[-4rem] w-16 rounded-lg bg-blue-500 p-4 text-white" />
              <h3 className="my-6 text-2xl font-bold">Technical Support</h3>
              <p className="text-xls text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                tenetur non facilis dolores dolorum corporis omnis totam
                laudantium minus quidem! Nisi suscipit labore exercitationem! Et
                accusantium sunt dicta facere laborum.
              </p>
            </div>
            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-blue-500">
                Contact Us <ArrowSmRightIcon className="ml-2 w-5" />
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white shadow-2xl">
            <div className="p-8">
              <ChipIcon className="mt-[-4rem] w-16 rounded-lg bg-blue-500 p-4 text-white" />
              <h3 className="my-6 text-2xl font-bold">Media Inquiries</h3>
              <p className="text-xls text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                tenetur non facilis dolores dolorum corporis omnis totam
                laudantium minus quidem! Nisi suscipit labore exercitationem! Et
                accusantium sunt dicta facere laborum.
              </p>
            </div>
            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-blue-500">
                Contact Us <ArrowSmRightIcon className="ml-2 w-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
