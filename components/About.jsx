import React from 'react'

const About = () => {
  return (
    <div name="about" className="my-32 w-full">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by many across the world
          </h2>
          <p className="py-6 text-3xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>

        <div className="grid gap-1 px-2 text-center md:grid-cols-3">
          <div className="rounded-xl border py-8 shadow-xl">
            <p className="text-6xl font-bold text-blue-600">100%</p>
            <p className="mt-2 text-gray-400">Completion</p>
          </div>
          <div className="rounded-xl border py-8 shadow-xl">
            <p className="text-6xl font-bold text-blue-600">24/7</p>
            <p className="mt-2 text-gray-400">Delivery</p>
          </div>
          <div className="rounded-xl border py-8 shadow-xl">
            <p className="text-6xl font-bold text-blue-600">100K</p>
            <p className="mt-2 text-gray-400">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
