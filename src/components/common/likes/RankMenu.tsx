import React from "react";
import Image from "next/image";

interface RankMenuProps {
  isAsc: boolean;
  toggleSort: () => void;
}

const RankMenu = ({ isAsc, toggleSort }: RankMenuProps) => {
  return (
    <div className="flex gap-2.5 px-2.5 py-3.75 text-black text-base">
      <div
        className="flex gap-1.5 w-37.5 cursor-pointer items-center"
        onClick={toggleSort} // 클릭 시 정렬 기준 토글
      >
        <Image
          src="/assets/upDownArrow.svg"
          alt="정렬 바꾸기"
          width={20}
          height={20}
          className={`${isAsc ? "rotate-0" : "rotate-180"} transition-transform`}
        />
        순위(응답 기준)
      </div>
      <div className="w-62.5">메뉴명</div>
      <div className="w-50">점수</div>
      <div className="w-25">변동</div>
    </div>
  );
};

export default RankMenu;