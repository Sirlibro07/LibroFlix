import React from "react";
import FirstMovie from "./FirstMovie";
import MoviesSection from "./MoviesSection";

const MoviesIndexContent = () => {
    return (
        <>
            <div className={`w-full text-white mt-[9rem]`}>
                <FirstMovie />
                <MoviesSection />
            </div>
        </>
    );
};

export default MoviesIndexContent;
