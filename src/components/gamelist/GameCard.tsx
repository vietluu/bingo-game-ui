import React from 'react'

const GameCard = ({
  title
}:{
  title: string
}) => {
  return (
    <div>
      <div className="bg-gradient-to-b w-full h-[98px] rounded-3xl text-white font-['Mochiy_Pop_P_One'] text-[28px] from-light-blue-50 to-light-blue-600 -300  p-4 flex items-center justify-center shadow-[0_4px_0_0_rgba(65,118,199,0.3)]">
      {
        title
      }
      </div>
    </div>
  )
}

export default GameCard