'use client'

import React, {useState} from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <header className='w-full h-40 border-b py-4 sm:block'>
      <div className='w-4/5 mx-auto py-5 px-10 flex flex-shrink justify-between items-center pb-2'>
        <div className='flex items-center mx-4'>
          <Image src="/Workapp.png" alt="logo" width="120" height="120" />
        </div>
        <div className="hidden sm:flex items-center border rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
            value={query}
            onChange={handleInputChange}
          />
          <button className="px-4 py-2 bg-black rounded-r-md">
            <FaSearch
              className="text-white h-6"
            />
          </button>
        </div>
        {/* sign buttons should be hidden but anything above sm should display flex */}
        <div className='hidden md:flex flex-wrap flex-shrink'>
          <button className="bg-gray-500 text-white mr-5 px-4 py-2 rounded">
            Sign In
          </button>
          <button className="bg-black text-white px-4 py-2">
            Sign Up
          </button>
        </div>
      </div>
      <div className='bg-blue-gray-700 w-full mx-auto'>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
