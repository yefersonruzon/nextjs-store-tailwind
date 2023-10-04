"use client";

import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import logo from '$/logo.svg'

export default function NavBar() {
    const [login, setLogin] = useState(true);
  return (
    <nav className="w-full z-10 h-16 fixed top-0 bg-white shadow-md flex justify-between items-center px-6">
        <Link href="/" className="flex items-center">
            <Image src={logo} width={25} height={25} />
        </Link>
        <ul className="flex mx-5">
            <li className="mx-3">
                <Link href={'/'}>Home</Link>
            </li>
            <li className="mx-3 text-gray-400">
                <Link href={'/'}>
                    Store
                    <i className="ri-arrow-down-s-line"></i>
                </Link>
            </li>
            <li className="mx-3 text-gray-400">
                <Link href={'/'}>Top sellers</Link>
            </li>
            <li className="mx-3 text-gray-400">
                <Link href={'/'}>Contact</Link>
            </li>
        </ul>
        <div className="flex">
        <form className="pr-4">   
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full  py-[.4rem] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-600 focus:border-gray-600 focus:outline-none" placeholder="Search..." required />
            </div>
        </form>
        {
            login? 
            <div className="flex items-center">
                <button className=" rounded-full border border-gray-600 px-[.45rem] py-[.2rem] hover:bg-gray-600 mr-4 text-gray-600 hover:text-white">
                    <i className="ri-shopping-cart-2-line text-[1.1rem] "></i>
                </button>
                
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
                    <svg className="absolute w-10 h-10 text-gray-200 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
            </div>

            :
            <div>

                <button className="mx-2 bg-white px-6 py-[.3rem] rounded-md border-[2px] border-gray-800">
                    <a href="">Log in</a>
                </button>
                <button className="mx-2 bg-gray-800 text-white px-6 py-[.3rem] rounded-md border-[2px] border-gray-800">
                    <a href="">Log in</a>
                </button>
            </div>
        }
        </div>
    </nav>
  )
}
