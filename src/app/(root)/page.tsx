import Feedbacktable from "@/components/common/home/feedbacktable";
import Margintable from "@/components/common/home/margintable";
import Mealbar from "@/components/common/home/mealbar";
import Preferbar from "@/components/common/home/preferbar";
import Statustable from "@/components/common/home/statustable";
import Sidebar from "@/components/common/sidebar";
import React from "react";

const Home = () => {
    return (
        <div className="w-full h-screen flex justify-center gap-5 pt-5">
            <Sidebar />
            <div className="max-w-2xl flex flex-col gap-5">
                <Mealbar />
                <Margintable />
                <div className="w-full h-16 flex justify-between">
                    <Preferbar />
                    <Preferbar />
                </div>
            </div>
            <div className="w-52 gap-5 flex flex-col">
                <Statustable />
                <Feedbacktable />
            </div>
        </div>
    );
};
export default Home;
