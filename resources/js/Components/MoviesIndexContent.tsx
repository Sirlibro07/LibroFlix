import React from "react";
import FirstMovie from "./FirstMovie";
import SliderSection from "./SlidersSection";

const MoviesIndexContent = () => {
    return (
        <>
            <div className={`w-full text-white mt-[9rem]`}>
                <FirstMovie />
                <SliderSection />
            </div>
        </>
    );
};

export default MoviesIndexContent;
