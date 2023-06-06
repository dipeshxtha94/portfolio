'use client'

import React from 'react'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './loading';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const About = () => {
  return (
   <main className='flex flex-row'>
    <div className='bg-slate-200 mt-48 ml-32 p-8 font-sans'>
      <h2 className='text-3xl font-semibold' style={{color:'rgb(60 5 245 / 50%)'}}>INERACTIVE</h2>
      <h2 className='text-3xl font-semibold' style={{color:'#f30ad9'}}>VISIONARY</h2>
      <p className='text-xl mt-4'>Hey! It&apos;s Dipesh, I have 2 years of experience in web development</p>
      <p className='text-xl mt-1' style={{color:'#c70ce7'}}>Expert in:</p>
      <p className='text-xl mt-1' style={{color:'#5b2e2e'}}>
      <Typewriter
            options={{
              strings: ['NextJS', 'MERN Stack', 'Redux', 'Redux-Toolkit', 'TypeScript'],
              autoStart: true,
              loop: true,
            }}
          />
          </p>
    </div>
    <div>

    </div>
   </main>
  )
}

export default About