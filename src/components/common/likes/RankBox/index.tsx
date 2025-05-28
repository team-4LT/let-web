import React from 'react'
import Image from 'next/image'
import { rankBoxProps } from "@/types/props/likes/rankBoxProps"

const RankBox = ({ rank, menuName, score, changeValue }: rankBoxProps) => {
  let change
  if (changeValue === 0) change = <div className='text-darkgrey'>-</div>
  else if(changeValue > 0){
    change = (
      <div className='flex gap-2 text-main'>
        <Image
          src="/assets/upArrow.svg"
          alt="상승"
          width={11.28}
          height={14.58}
        />
        {changeValue}위
      </div>
    )
  }else{
    change = (
      <div className='flex gap-2 text-[#0061FE]'>
        <Image
          src="/assets/downArrow.svg"
          alt="하락"
          width={11.28}
          height={14.58}
        />
        {-changeValue}위
      </div>
    )
  }

  return (
    <div className="flex gap-2.5 px-2.5 py-3.75 text-black text-base">
      <div className="w-37.5">{rank}위</div>
      <div className="w-62.5">{menuName}</div>
      <div className="w-50">{score}</div>
      <div className="w-25">{change}</div>
    </div>
  );
};

export default RankBox;