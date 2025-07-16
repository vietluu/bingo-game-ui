import React from 'react'

const Splash = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 w-full h-screen bg-[url('/assets/splashBg.png')] bg-cover bg-center"
    >
      <img
        src={"/public/logo.png"}
        alt="Logo"
        className="object-contain w-3/4"
      />
    </div>
  )
}

export default Splash