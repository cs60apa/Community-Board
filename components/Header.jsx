'use client'

import React, {useState} from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [query, setQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  //toggle still not functional
  const toggleSearch = () => {
    if (isSearchOpen) {
      // If the search bar is open
      if (query.trim() === '') {
        // If the query is empty, close the search bar
        setIsSearchOpen(false);
      } else {
        // If the query is not empty, submit the form
        handleSubmit(); // Call the submit function directly
      }
    } else {
      // If the search bar is closed, open it
      setIsSearchOpen(true);
    }
  };
  

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', query);
    setQuery('');
  }

  return (
    <header className='w-full h-fit border-b py-4 sm:block'>
      <div className='w-4/5 mx-auto py-5 px-10 grid grid-cols-3 gap-2 items-center pb-2'>
        <div className='flex items-center'>
          <Image src="/Workapp.png" alt="logo" width="120" height="120" />
        </div>
        <div className='flex justify-end px-4'>
        <form onSubmit={handleSubmit} className={`sm:flex items-center border rounded-md shadow-sm ${query.trim() ? 'block' : 'hidden'}`}>
            <label htmlFor="searchInput" className="sr-only">
              Search
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder="Search..."
              className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
              value={query}
              onChange={handleInputChange}
            />
            <button type="submit" className="px-4 py-2 bg-black rounded-r-md">
              <FaSearch className="text-white h-6" />
            </button>
        </form>

          {/* <button type="submit" onClick={toggleSearch} className="px-4 py-2 bg-black rounded-r-md">
              <FaSearch
                className="text-white h-6"
              />
          </button> */}
        </div>

        {/* sign buttons should be hidden but anything above sm should display flex */}
        <div className='hidden lg:flex flex-wrap flex-shrink'>
          <button className="bg-gray-500 text-white mr-5 px-4 py-2 rounded">
            Sign In
          </button>
          <button className="bg-black text-white px-4 py-2">
            Sign Up
          </button>
        </div>
      </div>
      <div className='w-4/5 bg-blue-gray-700 mx-auto'>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
