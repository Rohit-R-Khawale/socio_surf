"use client";
import React from 'react'
import { HiHome } from "react-icons/hi";
import Icon from "../../public/socioSerfIcon.png";
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
// usesession is used to get the session data if user is logged in or not
import { useSession } from 'next-auth/react'; 
import { HiDotsHorizontal } from "react-icons/hi";
const Sidebar = () => {
  const {data: session} = useSession();
  return (
    <main className='flex flex-col gap-4 p-3 justify-between h-screen'>
        <div className="flex flex-col gap-4 p-3">
          {/* App icon */}
                <Link href="/" className='flex justify-around'>
            <Image src={Icon} alt="Icon" className='w-16 cursor-pointer p-3 hover:bg-gray-400 rounded-full transition-all duration-300' />
            <h1 className='text-xl font-bold font-mono my-auto hidden md:inline'>SocioSurf</h1>
                </Link>
                {/* Home  */}
                <Link href="/" className='flex gap-2 hover:bg-gray-400 w-fit p-3 rounded-full hover:text-white items-center transition-all duration-200'>
                <HiHome className='text-3xl'/>
                <p className='font-bold hidden md:inline my-auto '>Home</p>
                </Link>
                {session ? (<button className='bg-green-600 rounded-full px-3 py-1 font-semibold text-white hover:brightness-95  transition-all duration-100 w-48 h-9 hover:cursor-pointer shadow-md hidden  md:inline ' onClick={()=>{
          signOut()
                }}>
          Sign out
                </button>):
                (<button className='bg-green-600 rounded-full px-3 py-1 font-semibold text-white hover:brightness-95  transition-all duration-100 w-48 h-9 hover:cursor-pointer shadow-md hidden  md:inline ' onClick={()=>{
          signIn()
                }}>
          Sign In
                </button>)}
        </div>
      
      {/* profile  */}
      <div className="">
        {session && (
          <Link href={"session/profile"} className="hover:bg-gray-200 rounded-full flex gap-2 p-2 hover:cursor-pointer mx-auto">
            <img src={session.user.image} alt="" className='rounded-full w-12 ' />
            <p className='my-auto font-semibold text-gray-700 hidden md:inline'>{session.user.username}</p>
            <HiDotsHorizontal className='my-auto text-gray-700 hover:bg-gray-300 rounded-full border-spacing-1 hidden md:inline'/>
          </Link>
        )}
      </div>
      
    </main>
  )
}

export default Sidebar
