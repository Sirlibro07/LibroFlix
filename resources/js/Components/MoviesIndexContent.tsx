import React from "react";
import FirstMovie from "./FirstMovie";
import MoviesSlider from "./MoviesSlider";

const MoviesIndexContent = () => {
    return (
        <>
            <div className={`w-full text-white mt-[9rem]`}>
                <FirstMovie />
                <MoviesSlider
                    movies={[
                        { thumbnail_path: "Land" },
                        { thumbnail_path: "Land" },
                    ]}
                />
            </div>
        </>
    );
};

export default MoviesIndexContent;
