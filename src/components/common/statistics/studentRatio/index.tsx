"use client"

import { useState } from "react";
import Checkbutton from "../checkbutton";
import RatioBar from "../ratioBar";

const StudentRatio = () => {
    const [checkNum, setCheckNum] = useState<0 | 1 | 2 | 3>(0);
    return (
        <div className="w-full px-7 py-5 bg-white flex flex-col items-center rounded-sm">
            <div className="w-full flex justify-between items-center">
                <div className="font-semibold text-black text-xl ">학년별 식사자 비율</div>
                {/* 1, 2, 3학년 필터 */}
                <div className="flex gap-2">
                    {[0, 1, 2, 3].map((id) => (
                        <Checkbutton
                            key={id}
                            id={id as 0 | 1 | 2 | 3}
                            checkNum={checkNum}
                            setCheckNum={setCheckNum}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-between">
                {/* 1학년 */}
              <div className="flex flex-col items-center gap-5">
                  <div className="flex gap-10 items-end h-72"> 
                      <RatioBar focus="아침" percent={20} />
                      <RatioBar focus="점심" percent={20} />
                      <RatioBar focus="저녁" percent={100} />
                  </div>
                  <div className="text-black font-semibold text-base mt-2">1학년</div>
              </div>
                {/* 2학년 */}
              <div className="flex flex-col items-center gap-5">
                  <div className="flex gap-10 items-end h-72"> 
                      <RatioBar focus="아침" percent={20} />
                      <RatioBar focus="점심" percent={20} />
                      <RatioBar focus="저녁" percent={100} />
                  </div>
                  <div className="text-black font-semibold text-base mt-2">2학년</div>
              </div>
                {/* 3학년 */}
              <div className="flex flex-col items-center gap-5">
                  <div className="flex gap-10 items-end h-72"> 
                      <RatioBar focus="아침" percent={20} />
                      <RatioBar focus="점심" percent={20} />
                      <RatioBar focus="저녁" percent={100} />
                  </div>
                  <div className="text-black font-semibold text-base mt-2">3학년</div>
              </div>
            </div>
        </div>
    );
};

export default StudentRatio