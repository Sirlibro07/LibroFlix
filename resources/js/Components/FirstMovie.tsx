import React from "react";
import MovieInfo from "./MovieInfo";

const FirstMovie = () => {
    return (
        <>
            <div className="px-[44px] text-center z-1 ">
                <h1 className="font-bold text-[33px]">
                    Naruto Shippuden: The Movie
                </h1>
            </div>
            <MovieInfo date={"2007"} />
        </>
    );
};

export default FirstMovie;
