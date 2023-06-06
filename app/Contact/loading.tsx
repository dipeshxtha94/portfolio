export default function Loading(){
   
    return(
        <main className='flex bg-slate-200 pt-10'>
        <div className='bg-white text-black flex flex-col m-9 pl-16 ml-96 font-serif' style={{ width: '35rem', height: '25rem' }}>
          <h1 className='text-3xl font-semibold mt-5'></h1>
          <form action="" >
            <div className='mt-6'>
              <input type="text" placeholder='Enter your name' className='w-96 border-b-2 border-black outline-none'  /> <br />
            </div>
            <div className='mt-6'>
              <input type="email" placeholder='Enter a valid Email' className='w-96 border-b-2 border-black outline-none'
                 />
              <br />
            </div>
            <div className='mt-6'>
              <textarea cols={30} rows={4} placeholder='Enter you message here' className='w-96 border-b-2 border-black outline-none' ></textarea> <br />
             
            </div>
            <div className='mt-7 mb-3'>
              <input type="submit" value='Submit' className='w-20 border border-r-4 border-black cursor-pointer hover:bg-slate-100' />
            </div>
          </form>
        </div>
        <div className='bg-black text-white m-9 pt-11 pl-9 w-80 mt-40 -ml-20 h-96'>
          <div className='mb-10'>
            <div className='flex flex-row'>
              <div className='mt-1 mr-3' />
              <h2></h2>
            </div>
            <p></p>
          </div >
          <div className='mb-10'>
            <div className='flex flex-row'>
              <div className='mt-1 mr-3' />
              <h2></h2>
            </div>
            <p></p>
          </div>
          <div className='mb-10'>
            <div className='flex flex-row'>
              <div className='mt-1 mr-3' />
              <h2></h2>
            </div>
            <p></p>
          </div>
        </div>
      </main>
    )
}