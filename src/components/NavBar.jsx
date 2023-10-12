"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "$/logo.svg";

export default function NavBar() {
  const [login, setLogin] = useState(true);
  return (

    <div className="w-screen min-h-screenz-10  bg-gray-100">
        <nav className="w-full z-10 h-16 fixed border border-b-gray-200 top-0 bg-white flex justify-between pl-64 items-center px-6">
            
            <form className="pr-4 ml-2 flex">
                
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full  py-[.4rem] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-600 focus:border-gray-600 focus:outline-none" placeholder="Search..." required />
                </div>
            </form>
            <div className="flex">




            {
                login?
                <div className="flex items-center">
                    <button className=" rounded-full border border-gray-300 px-[.45rem] py-[.2rem] hover:bg-gray-600 mr-2 hover:border-gray-600 text-gray-400 hover:text-white">
                        <i className="ri-shopping-bag-3-line text-[1.1rem] "></i>
                    </button>

                    <div className="flex border border-gray-300 items-center px-1 py-0.5 rounded-full">
                        <div className="relative mr-1 w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
                            <svg className="absolute w-10 h-10 text-gray-200 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        <i className="ri-arrow-down-s-line text-xl text-gray-400"></i>

                    </div>
                </div>

                :
                <div>
                    <button className=" rounded-full border border-gray-400 px-[.45rem] py-[.2rem] hover:bg-gray-600 mr-4 text-gray-600 hover:text-white">
                        <i className="ri-shopping-bag-3-line text-[1.1rem] "></i>
                    </button>

                    <button className="mx-1 bg-gray-300 text-white px-6 py-[.3rem] rounded-md border-[2px] border-gray-300">
                        <Link href={'/auth'}>Log in</Link>
                    </button>
                </div>
            }
            </div>
        </nav>
      <div className="h-screen top-0 left-0 border border-r-gray-100 fixed w-64 z-20  ">
        <div className="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
          <div className="flex mt-3 px-4">
            <Link
              href="/"
              className="flex items-center translate-y-[-8px] mr-2"
            >
              <Image src={logo} width={30} height={30} />
            </Link>
            Bespoke
          </div>

          <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
            Analytics
          </span>

          <div className="flex mt-3 flex-1 flex-col">
            <div className="">
              <nav className="flex-1">
                <Link
                  href="/"
                  title=""
                  className="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-sm font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      className=""
                    ></path>
                  </svg>
                  Dashboard
                </Link>

                <Link
                  href="/products"
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Products
                  <span className="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">
                    6
                  </span>
                </Link>

                <div className="relative transition">
                  <input
                    className="peer hidden"
                    type="checkbox"
                    id="menu-1"
                    checked
                  />
                  <button className="flex peer relative w-full items-center border-l-rose-600 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4">
                    <span className="flex mr-5 w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </span>
                    Analytics
                    <label
                      htmlFor="menu-1"
                      className="absolute inset-0 h-full w-full cursor-pointer"
                    ></label>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <ul className="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
                    <li className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600">
                      <span className="mr-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </span>
                      Revenue
                    </li>
                    <li className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600">
                      <span className="mr-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </span>
                      Refunds
                    </li>
                  </ul>
                </div>
              </nav>


              <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                Content Management
              </span>

              <nav className="flex-1">
                <a
                  href="#"
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Contact
                </a>
              </nav>
              <nav className="absolute bottom-0 mb-2.5">
                 <a
                  href="#"
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  
                  <i className="ri-user-smile-line text-lg mr-4 align-middle"></i>
                  Help
                </a>
                <a
                  href="#"
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  
                  <i className="ri-settings-3-line text-lg mr-4 align-middle"></i>
                  Settings
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
