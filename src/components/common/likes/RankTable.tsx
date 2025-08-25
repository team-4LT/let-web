"use client";

import RankBox from "./RankBox";
import RankMenu from "./RankMenu";
import { useEffect, useState } from "react";
import { RankInfo, RankList } from "@/types/type/likes/rankInfo";
import useGetMenuRank from "@/hooks/likes/useGetMenuRank";
import PageHandler from "./PageHandler";

const RankTable = () => {
    const [ isAsc, setIsAsc ] = useState(true); // 정렬 기준 (true: 오름차순, false: 내림차순)
    const [ isReverse, setIsReverse ] = useState(false);

    const [ rankInfo, setRankInfo ] = useState<RankInfo>();
    const [ nowPage, setNowPage ] = useState(1);

    useEffect(() => {
        const fetchData = async (nowPage:number, isReverse:boolean) => {
            const result = await useGetMenuRank(nowPage, isReverse);
            if(result) setRankInfo(result);
            else alert('급식 랭킹 불러오기 실패!')
        }
        fetchData(nowPage, isReverse);
    }, [nowPage, isReverse]);

    return (
        <div className="w-full flex flex-col gap-5 px-7.5 py-5 bg-white rounded">
            <div className="flex justify-between">
                <p className="font-semibold text-xl">메뉴 선호 순위</p>
            </div>
            <div className="divide-y divide-grey">
                <RankMenu 
                    isAsc={isAsc} 
                    toggleSort={() => {
                        setIsAsc(!isAsc)
                        setIsReverse(!isReverse)
                    }} 
                />
                {rankInfo?.menus.map((item: RankList) => (
                    <RankBox
                        key={`${item.menuId}-${item.currentRank}`}
                        rank={item.currentRank}
                        menuName={item.menuName}
                        score={item.menuScore}
                        menuId={item.menuId}
                    />
                ))}
            </div>
            <PageHandler
                nowPage={nowPage}
                setNowPage={setNowPage}
                totalPage={rankInfo? (rankInfo.total/rankInfo.page): 1}
            />
        </div>
    );
};

export default RankTable;