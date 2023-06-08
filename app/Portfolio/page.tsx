'use client'

import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <main className='flex pl-10 flex-col pt-10 xl:pl-32'>
      <p className='text-sm font-semibold -ml-1 xl:text-2xl'>List of Projects:</p>
      <div>
        <ol className='list-decimal pt-4 text-xs xl:text-lg'>
        <Link href='https://github.com/dipeshxtha94/frontend-assignment' target='_blank'>
          <li className='mb-2 cursor-pointer font-semibold' >Music Details- Dynamic Routing, Developed with Nextjs13, Redux-toolkit, and TypeScript</li>
          </Link>
          <Link href='https://github.com/dipeshxtha94/Onlinewear' target='_blank'>
          <li className='mb-2 cursor-pointer font-semibold' >OnlineWear- A E-commerce Site, Developed with Nextjs, Mongodb</li>
          </Link>
          <Link href='https://github.com/dipeshxtha94/Comparative-Analysis-on-Sorting-Algorithms' target="_blank">
          <li className='mb-2 cursor-pointer font-semibold' >Comparative Analysis of Sorting Algorithms, Developed with Nextjs, Mongodb</li>
          </Link>
          <Link href='https://github.com/dipeshxtha94/Blog' target="_blank">
          <li className='mb-2 cursor-pointer font-semibold'>HuntingBlog- Developed with Nextjs</li>
          </Link>
          <Link href='https://github.com/dipeshxtha94/Todo-List-React-' target="_blank">
          <li className='mb-2 cursor-pointer font-semibold'>TodoList- Developed with React</li>
          </Link>
          <Link href='https://github.com/dipeshxtha94/Resume-Page' target="_blank">
          <li className='mb-2 cursor-pointer font-semibold'>Resume Page- Developed with React</li>
          </Link>
          <Link href='https://github.com/dipeshxtha94/react-redux-demo-project' target="_blank">
          <li className='mb-2 cursor-pointer font-semibold'>Increment Decrement- Redux Example, Developed with React and Redux</li>
          </Link> 
          <Link href='https://github.com/dipeshxtha94/First-Project-of-JS' target="_blank">
          <li className='mb-2 cursor-pointer font-semibold'>Some JavaScript&apos;s Short Projects- Developed with core Javascript, HTML, CSS</li>
          </Link>          
                
        </ol>
      </div>
    </main>
    )
}

export default Portfolio