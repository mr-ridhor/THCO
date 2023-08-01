import React from 'react'
import Navbar from './Nav/Navbar'
import LeftPane from './LeftPane'

const Sidebar = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full  h-screen flex bg-yel  low-300'>
        <LeftPane/>
        <main className="h-full bg-[#F4F5FA] w-full">
        <Navbar/>
        <div className="h-[calc(100vh-56px)] xl:h-[calc(100vh-80px)]  ">
          {children}
        </div>
        {/* {children} */}

        </main>
    </div>
  )
}

export default Sidebar