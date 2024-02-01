import React from "react";
import FirstMovie from "./FirstMovie";
import SliderSection from "./SlidersSection";

const HomeContent = () => {
    return (
        <>
            <div className={`w-full text-white mt-[9rem]`}>
                <FirstMovie />
                <SliderSection />
            </div>
        </>
    );
};

export default HomeContent;
