import Checktable from '@/components/common/statistics/checktable'
import MuchTable from '@/components/common/statistics/muchtable'
import StudentRatio from '@/components/common/statistics/studentRatio'
import React from 'react'

const Statistics = () => {
  return (
    <div className="w-full flex justify-center py-5">
      <div className='w-[53.125rem] flex flex-col gap-5'> 
        <StudentRatio/>
          <div className='w-[53.125rem] min-h-90 flex gap-5'>
            <Checktable/>
            <MuchTable/>
        </div>
      </div>
    </div>
  )
}

export default Statistics
