'use client'


import { SiEgghead } from 'react-icons/si'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const Navbar = () => {

 

  return (
    <main className='bg-slate-400 flex justify-between'>
      <Link href='/'>
        <div className='flex mt-5 ml-3 font-semibold cursor-pointer'>
          <SiEgghead size={24} color="black" className='' />
          <p className='text-lg ml-1'>
              <Typewriter
            options={{
              strings: ['Dipesh Shrestha'],
              autoStart: true,
              loop: true,
            }}
          />
          </p>
        </div>
      </Link>
      <ul className='flex justify-end text-xl'>
        <Link href='/Contact'>
          <li className='mr-16 mt-5 font-semibold border-r-2 hover:bg-slate-500 w-24 text-center'>Contact</li>
        </Link>
        <Link href="/Portfolio">
        <li className='mr-16 mt-5 font-semibold border-r-2 hover:bg-slate-500 w-24 text-center'>Portfolio</li>
        </Link>
        <Link href='/About'>
          <li className='mr-16 mt-5 font-semibold border-r-2 hover:bg-slate-500 w-24 text-center'>About</li>
        </Link>
      </ul>
    </main>
  )
}

export default Navbar