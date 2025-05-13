import React from 'react'

const Preferbar = () => {
  return (
    <div className='w-9/19 h-full px-7 py-5 bg-white rounded-sm flex items-center justify-between'>
      <div className='font-semibold text-black text-base'>선호하는 음식</div>
      <div className='flex items-center gap-1.5'>
        <div className='text-grey font-semibold text-xs cursor-pointer'>바로 가기</div>
        <img src="/assets/arrow.svg" className='w-2'/>
      </div>
    </div>  
  )
}

export default Preferbar
