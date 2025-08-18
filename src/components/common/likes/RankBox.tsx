"use client";

import React, { useEffect, useState } from 'react'
import { RankBoxProps } from "@/types/props/likes/rankBoxProps"
import { useGetChangeElement } from '@/hooks/likes/useGetChangeElement';
import customAxios from '@/libs/axios/customAxios';

const RankBox = ({ rank, menuName, score, menuId }: RankBoxProps) => {
  const [ rankChange, setRankChange ] = useState<number>(0);

  const getChange = async () => {
    try{
        const res = await customAxios.get(`/menu-rank/diff/${menuId}`)
        if(res.status === 200) setRankChange(res.data.data)
    }catch(err){
        console.log(err)
    }
  }

  useEffect(() => {
    getChange();
  }, [menuId]);

  const change = useGetChangeElement(rankChange);

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