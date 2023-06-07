'use client'

import Image from 'next/image'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex items-center p-5 mt-4 sm:flex sm:items-center sm:p-18 sm:mt-1">
      <div className=' flex flex-col justify-start ml-3 text-xl xl:flex xl:flex-col xl:justify-start xl:ml-6 xl:text-2xl '>
        <Link href="https://www.facebook.com/dipesh.stha.3158/" target='_blank' rel='noopener noreferrer'>
          <AiFillFacebook className='m-1 cursor-pointer' />
        </Link>

        <Link href="https://github.com/dipeshxtha94" target='_blank' rel='noopener noreferrer'>
          <AiFillGithub className='m-1 cursor-pointer' />
        </Link>

        <Link href="" target='_blank' rel='noopener noreferrer'>
          <GrInstagram className='m-1 cursor-pointer' />
        </Link>

      </div>
      <div className='flex ml-2 items-center p-5 mt-10 sm:flex sm:items-center sm:p-18 sm:mt-5'>
        <div className='sm:ml-10 sm:relative sm:w-full'>
          <img src="/dipesh.png"
            width='700rem'
            height='600rem' alt='Dipesh' />
        </div>
        <div className='w-18 -ml-10 sm:-ml-40 sm:relative' >
          <p className='text-xl font-bold tracking-widest sm:text-7xl sm:font-bold sm:tracking-widest sm:mb-4 '>CREATIVE</p>
          <p className='text-xl tracking-tighter font-semibold ml-2 sm:text-xl sm:tracking-widest'>DEVELOPER</p>
          <p className='text-sm font-semibold opacity-75 ml-2 tracking-widest sm:text-xl'>SENSIBLE TO MERN STACK/NEXTJS</p>
        </div>
      </div>
      {/* <div>
        <h1 className='text-2xl xl:text-lg'>hello</h1>
      </div> */}
    </main>
  )
}
