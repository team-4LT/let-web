import RankTable from "@/components/common/likes/RankTable";

const Likes = () => {
    return (
        <div>
            <div className="w-full flex gap-5 pb-10">
                <div className="w-[51rem] flex flex-col gap-5">
                    <RankTable />
                </div>
            </div>
        </div>
    );
};

export default Likes;
