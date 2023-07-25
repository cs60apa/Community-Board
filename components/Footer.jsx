import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bottom-0 right-0 left-0 w-full h-16 py-4 bg-slate-600 border-t text-center">
      {/* <div className="container mx-auto py-4 "> */}
        <p className="text-white">&copy; 2023 Real Estate</p>
        <div className="flex justify-center space-x-8">
          <div className='text-blue-500'>
            <FaTwitter/>
          </div>
          <div className='text-white'>
            <FaInstagram />
          </div>
          <div className='text-blue-500'>
            <FaFacebook />
          </div>
        </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer
