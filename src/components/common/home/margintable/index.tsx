import React from 'react'

const Margintable = () => {
  return (
    <div className='w-full h-70 px-7 py-5 bg-white rounded-sm flex flex-col gap-8'>
      <div className='text-black font-semibold text-base'>점심 평균 잔반 제로수</div>
        <div className='flex flex-col gap-8'>
            <div className='flex gap-3.5 h-10 items-center'>
                <div className='text-black font-medium text-base'>1학년</div>
                <div className='bg-main h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * 20}rem` }}/>
                <div className='text-black font-medium text-base'>20%</div>
            </div>
            <div className='flex gap-3.5 h-10 items-center'>
                <div className='text-black font-medium text-base'>2학년</div>
                <div className='bg-second h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * 40}rem` }}/>
                <div className='text-black font-medium text-base'>40%</div>
            </div>
            <div className='flex gap-3.5 h-10 items-center'>
                <div className='text-black font-medium text-base'>3학년</div>
                <div className='bg-third h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * 60}rem` }}/>
                <div className='text-black font-medium text-base'>60%</div>
            </div>
        </div>
    </div>
  )
}

export default Margintable
