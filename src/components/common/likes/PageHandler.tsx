import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface PageProps {
    nowPage: number;
    setNowPage: Dispatch<SetStateAction<number>>;
    totalPage: number;
}

const PageHandler = (props: PageProps) => {
    const { nowPage, setNowPage, totalPage } = props;

    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(<div key={i}>{i}</div>);
    }

    return (
        <div className="flex justify-between">
            <Image
                src="/assets/leftArrow.svg"
                alt="왼쪽 화살표"
                className="cursor-pointer"
                width={7}
                height={12}
            />
            {pages.map((_, i) => (
                <div
                    key={i}
                    className={`text-${
                        i === nowPage - 1 ? "second" : "darkgrey"
                    } cursor-pointer`}
                    onClick={() => setNowPage(i + 1)}
                >
                    {i + 1}
                </div>
            ))}
            <Image
                className="cursor-pointer"
                src="/assets/rightArrow.svg"
                alt="오른쪽 화살표"
                width={7}
                height={12}
            />
        </div>
    );
};

export default PageHandler;
