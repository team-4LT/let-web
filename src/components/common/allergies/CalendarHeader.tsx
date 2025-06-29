const CalendarHeader = () => {
  const weekDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  return (
    <div className="flex justify-around items-center h-7.5 bg-white text-black text-sm border-1 border-grey">
      {weekDays.map((day) => (
        <div key={day}>
          {day}
        </div>
      ))}
  </div>
  )
}

export default CalendarHeader