import React from 'react'
import Navbar from './Nav/Navbar'
import LeftPane from './LeftPane'

const Sidebar = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full  h-screen flex'>
        <LeftPane/>
        <main className="bg-yellow-500 w-full">
        <Navbar/>
        {children}

        </main>
    </div>
  )
}

export default Sidebar