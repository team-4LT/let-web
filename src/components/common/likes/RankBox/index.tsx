import React from 'react'
import { rankBoxProps } from "@/types/props/likes/rankBoxProps"
import { useChangeElement } from '@/hooks/likes/getElement';

const RankBox = ({ rank, menuName, score, changeValue }: rankBoxProps) => {
  const ChangeElement = useChangeElement(changeValue);

  return (
    <div className="flex gap-2.5 px-2.5 py-3.75 text-black text-base">
      <div className="w-37.5">{rank}위</div>
      <div className="w-62.5">{menuName}</div>
      <div className="w-50">{score}</div>
      <div className="w-25">{ChangeElement}</div>
    </div>
  );
};

export default RankBox;