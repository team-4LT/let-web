import Calendar from '@/components/common/allergies/Calendar'
import React from 'react'

const Allergies = () => {
  return (
    <div>
      <div className="w-full flex gap-5 pb-10">
        <div className="w-[51rem] flex flex-col gap-5">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Allergies