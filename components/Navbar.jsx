'use client'

import React, {useState} from 'react'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const navigationLinks = [
        { id: 1, text: 'Home', href: '/' },
        { id: 2, text: 'Business', href: '/business' },
        { id: 3, text: 'Pricing', href: '/pricing' },
        { id: 4, text: 'Contact Us', href: '/contact' },
        { id: 5, text: 'jobs', href: '/jobs' },
        { id: 6, text: 'Workers', href: '/workers' },
        { id: 7, text: 'Find People', href: '/find-people' },
        { id: 8, text: 'Events', href: '/events' },
        { id: 9, text: 'Our Services', href: '/services' }
        // Add more navigation links as needed
      ];

  return (
    <div className='flex justify-center p-8 bg-blue-gray-600 border-y md:border-slate-500'>
        <div className='container '>
            <ul className='hidden divide-y max-w-full h-fit p-5 md:flex'>
                {/* <Link href="/">
                    <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>home</li>
                </Link> */}
                <nav className="hidden text-sm m-auto md:flex flex-wrap p-2 lg:text-xl space-x-4 items-center">
                    {navigationLinks.map((link) => (
                        <Link key={link.id} href={link.href}>
                            <div className="group flex-auto relative rounded overflow-hidden hover:shadow-md transition-shadow">
                                <li className="block text-gray-600 hover:text-white hover:bg-black p-2 rounded hover:rounded-lg">{link.text}</li>
                            </div>
                        </Link>
                    ))}
                </nav>
            </ul>
        </div>

        {/* mobile button */}
        <div onClick={handleNav} className='absolute right-0 mr-5 top-10 md:hidden z-10'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        <div className={nav ? 'md:hidden absolute z-10 left-0 right-0 top-24 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300' : 'md:hidden absolute z-10 top-[-100%] right-0 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300'}>
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