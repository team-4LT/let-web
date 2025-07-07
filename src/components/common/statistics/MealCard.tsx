import { MealCardType } from "@/types/props/statistics/mealCardType"

const Mealcard = ({meal, time}:MealCardType) => {
  return (
    <div className='flex flex-col p-7 gap-5 items-center justify-center border-grey border-1 rounded-sm'>
      <div className="flex gap-2 items-center">
        <img src={time === "아침" ? "/assets/morning.svg" : time === "점심" ? "/assets/afternoon.svg" : "/assets/night.svg"}/>
        <div>{time}</div>
      </div>
        <div className="text-center">
            {/* 메뉴 출력 */}
            {meal?.map((item:any) => {
              return (
                <div className="text-darkgrey text-base" key={item.menuId}>
                  {item.menuName}
                </div>
              );
            })}
        </div>
    </div>
  )
}

export default Mealcard
