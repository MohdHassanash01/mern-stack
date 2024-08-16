'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const path = usePathname();
    console.log(path);
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full  text-sm py-3 dark:bg-neutral-800 border-b-2 border-indigo-500 text-black">
    <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
      <Link
        className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
        href="/"
      >
        my react app
      </Link>
      
      <div className="sm:order-3 flex items-center gap-x-2">
        <button
          type="button"
          className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          id="hs-navbar-alignment-collapse"
          aria-expanded="false"
          aria-controls="hs-navbar-alignment"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-navbar-alignment"
        >
         
          <span className="sr-only">Toggle</span>
        </button>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          Button
        </button>
      </div>
      <div
        id="hs-navbar-alignment"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        aria-labelledby="hs-navbar-alignment-collapse"
      >
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

          <Link
            className={"font-medium  text-gray-600 hover:text-gray-400 " + (path === '/' ? 'border-neutral-800 text-nutral-200' : 'border-transparent text-neutral-500' )}
            href="/contact"
           
          >
            Contact
          </Link>

          <Link
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="/login"
          >
            Login
          </Link>

          <Link
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="/work"
          >
            Work
          </Link>


          <Link
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="/signup"
          >
            signup
          </Link>


        </div>
      </div>
    </nav>
  </header>
  
  )
}

export default Navbar


