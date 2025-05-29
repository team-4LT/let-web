import React from 'react'
import { RankBoxProps } from "@/types/props/likes/rankBoxProps"
import { getChangeElement } from '@/hooks/likes/getChangeElement';

const RankBox = ({ rank, menuName, score, changeValue }: RankBoxProps) => {
  const change = getChangeElement(changeValue);

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