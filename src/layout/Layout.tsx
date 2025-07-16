import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-screen w-full overflow-y-scroll px-6 bg-gradient-to-b from-['>{
      <Outlet/>
    }</div>
  )
}

export default Layout