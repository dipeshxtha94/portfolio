'use client'


import { SiEgghead } from 'react-icons/si'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { ImHome } from 'react-icons/im'

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const Navbar = () => {

 

  return (
    <main className='w-full overflow-hidden flex flex-col sm:w-full'>
      <div className='bg-slate-400 flex justify-between'>
      <Link href='/'>
        <div className='flex mt-5 ml-1 font-semibold cursor-pointer'>
          <SiEgghead size={24} color="black" className='xl:mt-1' />
          <p className='text-xs ml-1 mt-1 xl:text-lg xl:mt-1 xl:ml-2'>
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
      <ul className=' flex justify-end text-xs mr-3 sm:flex sm:justify-end sm:text-lg'>
        <Link href='/Contact'>
          <li className='mt-6 font-semibold border-r-2 w-16 hover:bg-slate-500 sm:w-24 text-center sm:mr-16 xl:mt-5 xl:font-semibold'>Contact</li>
        </Link>
        <Link href="/Portfolio">
        <li className='mt-6 font-semibold border-r-2 w-16 hover:bg-slate-500 sm:w-24 text-center sm:mr-16'>Portfolio</li>
        </Link>
        <Link href='/About'>
          <li className='mt-6 font-semibold border-r-2 w-16 hover:bg-slate-500 sm:w-24 text-center sm:mr-16'>About</li>
        </Link>
        <Link href='/'>
          <ImHome className='mt-6 font-semibold border-r-2 w-5 hover:bg-slate-500 sm:w-11 text-center sm:mr-16' /> 
        </Link>
      </ul>
      </div>
    </main>
  )
}

export default Navbar