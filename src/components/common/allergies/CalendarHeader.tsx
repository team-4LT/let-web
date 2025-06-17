import React from 'react'

const CalendarHeader = () => {
  const weekDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  return (
    <div className="flex justify-around text-black text-sm">
      {weekDays.map((day) => (
        <div key={day}>
          {day}
        </div>
      ))}
  </div>
  )
}

export default CalendarHeader