import React from 'react'

export function NavBar({firstname}) {
  return (
      
    <div className=' bg-[#F4BF96] h-20 flex p-2 pl-4 pr-4 items-center justify-between'>
      <div id="appName" className=' text-[#1F1717] text-4xl font-semibold ' >
        Swift Study
      </div>
      <div className='text-[#1F1717] text-2xl font-semibold'>
        Hello,{firstname}
      </div>
    </div>

  )
}

