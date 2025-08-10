import React from 'react'
import { HiHome } from "react-icons/hi";
import Icon from "../../../public/socioSerfIcon.png";
import Image from 'next/image';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <main className='flex flex-col gap-4 p-3'>
        {/* App icon */}
      <Link href="/" className='flex gap-2 justify-around'>
          <Image src={Icon} alt="Icon" className='w-16 cursor-pointer p-3 hover:bg-gray-400 rounded-full transition-all duration-300' />
          <h1 className='text-xl font-bold font-mono my-auto'>SocioSurf</h1>
      </Link>
      {/* Home  */}
      <Link href="/" className='flex gap-2 hover:bg-gray-400 w-fit p-3 rounded-full hover:text-white items-center transition-all duration-200'>
      <HiHome className='text-3xl'/>
      <p className='font-bold hidden xl:inline my-auto '>Home</p>
      </Link>
      {/* Signin Signup */}
      <button className='bg-green-600 rounded-full px-3 py-1 font-semibold text-white hover:brightness-95  transition-all duration-100 w-48 h-9 hover:cursor-pointer shadow-md hidden  md:inline '>
        Sign In
      </button>
    </main>
  )
}

export default Sidebar
