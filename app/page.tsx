'use client'

import Image from 'next/image'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Home() {
  return ( 
  <main className="flex items-center p-18 mt-4">
    <div className=' flex flex-col justify-start ml-6 text-2xl'>
      <Link href="https://www.facebook.com/dipesh.stha.3158/" target='_blank' rel='noopener noreferrer'>
        <AiFillFacebook className='m-1 cursor-pointer'/>
      </Link>
    
      <Link href="https://github.com/dipeshxtha94" target='_blank' rel='noopener noreferrer'>
      <AiFillGithub className='m-1 cursor-pointer'/>
      </Link>

      <Link href="" target='_blank' rel='noopener noreferrer'>
      <GrInstagram className='m-1 cursor-pointer'/>
      </Link>
    
    </div>
    <div  className='flex ml-40 items-center p-18 mt-10'> 
    <div className='-mr-40'>
      <Image src="/dipesh.png" width={700} height={700} alt='Dipesh' />
    </div>
      <div className=''>
        <p className='text-7xl font-bold tracking-widest mb-4'>CREATIVE</p>
        <p className='text-3xl font-semibold ml-2 mb-4 ' style={{letterSpacing: '1.7rem'}}>DEVELOPER</p>
        <p className='text-xl font-semibold opacity-75 ml-2 tracking-widest'>SENSIBLE TO MERN STACK/NEXTJS</p>
        </div>
        </div>
    </main>
      )
}
