import Checktable from "@/components/common/statistics/checktable";
import MuchTable from "@/components/common/statistics/muchtable";
import StudentRatio from "@/components/common/statistics/studentRatio";

const Statistics = () => {
    return (
        <div>
            <div className="w-full flex gap-5 pb-10">
                <div className="w-[51rem] flex flex-col gap-5">
                    <StudentRatio />
                    <div className="w-[51rem] min-h-90 flex gap-5">
                        <Checktable />
                        <MuchTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
