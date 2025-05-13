import React from 'react'
import RatioBar from '../ratioBar'

const StudentRatio = () => {
  return (
    <div className='w-full px-7 py-5 gap-4'>
      <div className='text-xl text-black font-semibold'>학년별 식사자 비율</div>
      <div>
        <div className='flex items-end gap-10'>
          <RatioBar focus="아침" percent={20}/>
          <RatioBar focus="점심" percent={40}/>
          <RatioBar focus="저녁" percent={60}/>
        </div>
        <div className='text-black font-semibold text-base'>1학년</div>
      </div>
    </div>
  )
}

export default StudentRatio;