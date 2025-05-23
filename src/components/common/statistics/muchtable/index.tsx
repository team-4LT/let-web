"use client"
import { useState } from "react";
import Mealcard from "../mealcard";

const MuchTable = () => {
const meal: string[] = [
  "*현미밥",
  "물만두국",
  "브로콜리소시지볶음",
  "*명엽채튀김",
  "배추김치",
  "*치즈에그타르트",
];
  const [time, setTime] = useState(1);
const decreaseTime = () => {
  time !== 0 ? setTime((prev) => prev - 1) : setTime(2);
};

const increaseTime = () => {
  time !== 2 ? setTime((prev) => prev + 1) : setTime(0);
};

  return (
    <div className="w-full h-full px-7 py-5 bg-white flex flex-col items-center gap-6 rounded-sm"
        style={{ width: `${53.125 / 2 - 1.25 / 2}rem` }}>
        <div className="w-full flex justify-between items-center">
            <div className="font-semibold text-black text-xl ">이번 달 가장 식사자가 많은 날</div>
            <div className='flex w-14 h-6 rounded-sm justify-center items-center 
            text-xs font-semibold cursor-pointer bg-grey text-black'>
                12일
            </div>
        </div>
        <div className="flex gap-5">
            <img src="/assets/reversed_arrow.svg" className="cursor-pointer w-5" onClick={decreaseTime}/>
            <Mealcard time={time === 0 ? "아침" : time === 1 ? "점심" : "저녁"} meal={meal}/>
            <img src="/assets/arrow.svg" className="cursor-pointer w-5" onClick={increaseTime}/>
        </div>
        <div className="text-darkgrey text-base font-medium">
            전체 식사자 : <span className="font-bold">192</span>명
        </div>
    </div>
  )
}

export default MuchTable
