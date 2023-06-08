'use client'

import React from 'react'
import { FaBusinessTime } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLocation } from 'react-icons/io5'
import { useForm, SubmitHandler } from 'react-hook-form';

const Contact = () => {

  type FormValue = {
    name: String,
    email: String,
    message: String
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValue>()

  const postData = async (data: FormValue) => {
    const req = await fetch('http://localhost:3000/api/hello', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }
    )
  }

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data)
    postData(data)
    alert('Your message is submitted!')
    reset()
  }

  return (
    <main className='flex bg-slate-200 pt-4 xl:pt-10'>
      <div className='bg-white text-black flex flex-col m-9 pl-4 w-44 h-56 ml-12 font-serif sm:ml-96 sm:pl-16  sm:m-9 sm:w-2/5 sm:h-96' >
        <h1 className='text-base font-semibold mt-5 xl:text-3xl'>CONTACT US</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-1 xl:mt-6'>
            <input type="text" placeholder='Enter your name' className='w-28 text-xs border-b-2 border-black outline-none xl:w-96' {...register('name', { required: true })}  autoComplete='off' /> <br />
            {errors.name && <span>This field is required!</span>}
          </div>
          <div className='mt-1 xl:mt-6'>
            <input type="email" placeholder='Enter a valid Email' className='w-28 text-xs border-b-2 border-black outline-none xl:w-96'
              {...register('email',
                {
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                }
              )} 
              autoComplete='off' />
            <br />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className='mt-1 sm:mt-6'>
            <textarea cols={30} rows={4} placeholder='Enter you message here' className='w-28 text-xs border-b-2 border-black outline-none xl:w-96' {...register('message', { required: true })}  autoComplete='off' ></textarea> <br />
            {errors.message && <span>This field is required</span>}
          </div>
          <div className='mt-1 mb-2 xl:mt-7 xl:mb-3'>
            <input type="submit" value='Submit' className='w-11 text-xs border border-r-4 border-black cursor-pointer hover:bg-slate-100 xl:w-20' />
          </div>
        </form>
      </div>
      <div className='bg-black text-white m-9 pt-4 pl-1 w-40 mt-36 -ml-14 h-52 xl:h-80 xl:-ml-20 xl:mt-40 xl:w-80 xl:pl-9 xl:pt-11 xl:m-9'>
        <div className='mb-5 text-xs xl:mb-10 xl:text-base'>
          <div className='flex flex-row'>
            <FiPhoneCall className='mr-3 xl:mt-1 xl:mr-3' />
            <h2>CALL ME</h2>
          </div>
          <p>+977-9804361042</p>
        </div >
        <div className='mb-5 text-xs xl:mb-10 xl:text-base'>
          <div className='flex flex-row'>
            <IoLocation className='mr-2 xl:mt-1 xl:mr-3' />
            <h2>LOCATION</h2>
          </div>
          <p>Urlabari-01, Morang, Nepal</p>
        </div>
        <div className='mb-3 text-xs xl:mb-10 xl:text-base'>
          <div className='flex flex-row'>
            <FaBusinessTime className='mr-2 xl:mt-1 xl:mr-3' />
            <h2>BUSINESS HOURS</h2>
          </div>
          <p>All days: 10-5</p>
        </div>
      </div>
    </main>
  )
}

export default Contact