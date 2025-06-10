const Feedbacktable = () => {
    return (
        <div className="w-fill p-5 h-72 bg-white flex flex-col rounded-sm">
            <div className="font-semibold text-black text-base">
                4월 식단 피드백
            </div>
            <div className="w-fill text-darkgrey py-6 text-sm font-normal">
                전반적으로 균형 잡힌 식단이에요. 채소 섭취도 충분해서 비타민과
                섬유질도 잘 챙기셨어요. 아침 식사가 다소 부족해 보이므로
                단백질(예: 삶은 달걀, 두유 등)을 추가하면 더 좋을 것 같아요.
                간식으로 과일을 선택하신 점은 좋지만, 양 조절을 신경 써 주세요.
            </div>
        </div>
    );
};

export default Feedbacktable;
