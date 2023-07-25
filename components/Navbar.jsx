'use client'

import React, {useState} from 'react'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-center py-2 bg-blue-gray-600 border-y border-slate-500'>
        <div>
            <ul className='flex flex-wrap p-2 space-x-4 hidden md:flex shrink items-center'>
                <Link href="/">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>home</li>
                </Link>
                <Link href="/business">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Business</li>
                </Link>
                <Link href="/workers">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Workers</li>
                </Link>
                <Link href="/jobs">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Jobs</li>
                </Link>
                <Link href="/auto">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Auto</li>
                </Link>
                <Link href="/community">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Community</li>
                </Link>
                <Link href="/events">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Events</li>
                </Link>
                <Link href="/find-people">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Find People</li>
                </Link>
                <Link href="/About">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>About</li>
                </Link>
                <Link href="/services">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Our Services</li>
                </Link>
                <Link href="/contact">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>Contact Us</li>
                </Link>
            </ul>
        </div>

        {/* mobile button */}
        <div onClick={handleNav} className='absolute right-0 mr-5 top-10 md:hidden z-10'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        <div className={nav ? 'md:hidden absolute z-10 left-0 right-0 top-24 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300' : 'md:hidden absolute z-10 top-[-100%] right-0 top-24 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300'}>
            <ul className='bg-slate-600 text-white p-10 absolute top-0 right-0 w-full'>
                <Link href="/">
                    <li className='block py-4 text-center hover:text-amber-600 text-xl'>Home</li>
                </Link>
                <Link href="/about">
                    <li className='block py-4 text-center hover:text-amber-600 text-xl'>About</li>
                </Link>
                <Link href="/services">
                    <li className='block py-4 text-center hover:text-amber-600 text-xl'>Our Services</li>
                </Link>
                <Link href="/contact">
                    <li className='block py-4 text-center hover:text-amber-600 text-xl'>Contact Us</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar