import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <div className="x-10 fixed z-20 h-[80px] w-screen bg-blue-400 drop-shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-2">
        <div className="flex items-center">
          <h1 className="mr-4 text-center text-3xl font-bold sm:text-4xl">
            NOBLE
          </h1>
          <ul className="hidden space-x-4 md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden items-center pr-4 md:flex">
          <a
            href="/SignIn"
            className="mr-4 border-none bg-transparent text-black"
          >
            Sign In
          </a>
          <a href="/signup" className="px-8 py-3">
            Sign Up
          </a>
        </div>
        <div className="mr-4 md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute w-full bg-zinc-200 px-8'}>
        <li className="w-full border-b-2 border-blue-200">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="w-full border-b-2 border-blue-200">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="w-full border-b-2 border-blue-200">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="my-4 flex flex-col">
          <button className="mb-4 bg-transparent px-8 py-3 text-blue-600">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
