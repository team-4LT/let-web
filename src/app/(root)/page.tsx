import Bottombar from "@/components/common/home/Bottombar";
import Feedbacktable from "@/components/common/home/FeedbackTable";
import Margintable from "@/components/common/home/MarginTable";
import Mealbar from "@/components/common/home/Mealbar";
import Statustable from "@/components/common/home/StatusTable";

const Home = () => {
    return (
        <div>
            {/* 전부 다 합치는 곳 */}
                <div className="w-[51rem] flex gap-5">
                    {/* 급식 메뉴, 잔반 제로 수, 바텀바 띄워주는 곳 */}
                    <div className="max-w-2xl flex flex-col gap-5">
                        <Mealbar />
                        <Margintable />
                        <Bottombar/>
                    </div>
                    {/* 식사자 현황, 식단 피드백 정렬하는 곳 */}
                    <div className="w-52 gap-5 flex flex-col">
                        <Statustable />
                        <Feedbacktable />
                    </div>
            </div>
        </div>
    );
};
export default Home;
