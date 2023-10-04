import React from 'react'
import logo from '$/logoW.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 w-full h-72 bg-gray-800 flex px-12 py-11 text-white'>
        <section className='w-2/4 mr-14'>
            <div className='flex items-start mb-3'>
                <Image src={logo} className='mr-2' width={25} height={25} />
                <h2 className='text-lg'>Bespoke</h2>
            </div>
            <article className='text-base text-gray-400'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem.
            </article>
        </section>
        <section className='flex w-full justify-between pr-10'>
            <ul className=''>
                <li><h5 className='text-lg font-semibold'>Shop</h5></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Women's Clothing</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">For Sale</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Men's Clothing</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Accessories</a></li>
            </ul>
            <ul className=''>
                <li><h5 className='text-lg font-semibold'>About us</h5></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Our Story</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Our Team</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Testimonials</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Contact Us</a></li>
            </ul>
            <ul className=''>
                <li><h5 className='text-lg font-semibold'>Products</h5></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Size guide</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Care instructions</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Material information</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Product reviews</a></li>
            </ul>
            <ul className=''>
                <li><h5 className='text-lg font-semibold'>Contact with us</h5></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Social Media Links</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Newsletter Signup</a></li>
                <li className='mt-3 text-gray-400 hover:text-white hover:translate-x-1'><a href="">Affiliates Program</a></li>
            </ul>
        </section>
    </footer>
  )
}
