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
    <main className='flex bg-slate-200 pt-10'>
      <div className='bg-white text-black flex flex-col m-9 pl-16 ml-96 font-serif' style={{ width: '35rem', height: '25rem' }}>
        <h1 className='text-3xl font-semibold mt-5'>CONTACT US</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-6'>
            <input type="text" placeholder='Enter your name' className='w-96 border-b-2 border-black outline-none' {...register('name', { required: true })}  autoComplete='off' /> <br />
            {errors.name && <span>This field is required!</span>}
          </div>
          <div className='mt-6'>
            <input type="email" placeholder='Enter a valid Email' className='w-96 border-b-2 border-black outline-none'
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
          <div className='mt-6'>
            <textarea cols={30} rows={4} placeholder='Enter you message here' className='w-96 border-b-2 border-black outline-none' {...register('message', { required: true })}  autoComplete='off' ></textarea> <br />
            {errors.message && <span>This field is required</span>}
          </div>
          <div className='mt-7 mb-3'>
            <input type="submit" value='Submit' className='w-20 border border-r-4 border-black cursor-pointer hover:bg-slate-100' />
          </div>
        </form>
      </div>
      <div className='bg-black text-white m-9 pt-11 pl-9 w-80 mt-40 -ml-20 h-96'>
        <div className='mb-10'>
          <div className='flex flex-row'>
            <FiPhoneCall className='mt-1 mr-3' />
            <h2>CALL ME</h2>
          </div>
          <p>+977-9804361042</p>
        </div >
        <div className='mb-10'>
          <div className='flex flex-row'>
            <IoLocation className='mt-1 mr-3' />
            <h2>LOCATION</h2>
          </div>
          <p>Urlabari-01, Morang, Nepal</p>
        </div>
        <div className='mb-10'>
          <div className='flex flex-row'>
            <FaBusinessTime className='mt-1 mr-3' />
            <h2>BUSINESS HOURS</h2>
          </div>
          <p>All days: 10-5 Except Saturday</p>
        </div>
      </div>
    </main>
  )
}

export default Contact