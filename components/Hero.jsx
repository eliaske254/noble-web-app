import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'

// import bgImg from '../assets/laundry1.jpg'

const Hero = () => {
  return (
    <div
      name="home"
      className="flex h-screen w-full flex-col justify-between bg-zinc-200"
    >
      <div className="m-auto grid max-w-[1240px] md:grid-cols-2">
        <div className="flex w-full flex-col justify-center px-2 py-8 pt-10 md:items-start">
          <p className="text-2xl">Web services at your doorstep</p>
          <h1 className="py-3 text-5xl font-bold md:text-7xl">
            Professional Web Services
          </h1>
          <p className="text-2xl">Your satisfaction is our priority.</p>
          <button className="my-4 py-3 px-6 sm:w-[60%]">Schedule a call</button>
        </div>
        <div>
          <img className="w-full rounded-lg" src={'/tech.jpg'} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Hero
