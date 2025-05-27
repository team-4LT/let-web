import React from 'react'
import { rankBoxProps } from "@/types/props/statistics/rankBoxProps"

const RankBox = ({rank, menuName, score, change}:rankBoxProps) => {
  return (
    <div>
      <div>{rank}위</div>
      <div>{menuName}</div>
      <div>{score}</div>
      <div>{change}</div>
    </div>
  )
}

export default RankBox