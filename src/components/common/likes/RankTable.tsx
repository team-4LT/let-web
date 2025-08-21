"use client";

import customAxios from "@/libs/axios/customAxios";
import RankBox from "./RankBox";
import RankMenu from "./RankMenu";
import { useEffect, useState } from "react";

interface RankList {
    menuId: number;
    menuName: string;
    menuScore: number;
    currentRank: number;
}

const RankTable = () => {
    const [rankList, setRankList] = useState<RankList[]>();
    const [isAsc, setIsAsc] = useState(true); // 정렬 기준 (true: 오름차순, false: 내림차순)

    const getMenuRank = async () => {
        try {
            const res = await customAxios.get(`/menu-rank`);
            if (res.status === 200) setRankList(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMenuRank();
    }, []);

    // 정렬된 rankList 만들기
    const sortedList = rankList
        ?.filter((item: RankList) => item.currentRank > 0)
        .sort((a, b) =>
            isAsc ? a.currentRank - b.currentRank : b.currentRank - a.currentRank
        );

    return (
        <div className="w-full flex flex-col gap-5 px-7.5 py-5 bg-white rounded">
            <div className="flex justify-between">
                <p className="font-semibold text-xl">메뉴 선호 순위</p>
                <div>
                    <div className="px-4 py-2 text-sm font-medium text-black bg-bg rounded hover:bg-grey">
                        전체
                    </div>
                </div>
            </div>
            <div className="divide-y divide-grey">
                <RankMenu isAsc={isAsc} toggleSort={() => setIsAsc(!isAsc)} />
                {sortedList?.map((item: RankList) => (
                    <RankBox
                        key={`${item.menuId}-${item.currentRank}`}
                        rank={item.currentRank}
                        menuName={item.menuName}
                        score={item.menuScore}
                        menuId={item.menuId}
                    />
                ))}
            </div>
        </div>
    );
};

export default RankTable;