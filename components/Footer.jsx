import React from 'react'

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-24 w-full bg-slate-900 py-8 px-2 text-gray-300">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 border-b-2 border-gray-600 py-8 md:grid-cols-6">
        <div>
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className="pt-2 font-bold uppercase">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">Press</li>
            <li className="py-1">Api Status</li>
          </ul>
        </div>

        <div>
          <h6 className="pt-2 font-bold uppercase">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        <div>
          <h6 className="pt-2 font-bold uppercase">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest nes, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="mr-4 mb-4 w-full rounded-md p-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className="mb-4 p-2">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col justify-between px-2 py-4 text-center text-gray-500 sm:flex-row">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>

        <div className="flex justify-between pt-4 text-2xl sm:w-[300px]">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
          <FaTwitch />
        </div>
      </div>
    </div>
  )
}

export default Footer
