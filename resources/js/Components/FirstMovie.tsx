import React from "react";
import MovieInfo from "./MovieInfo";
import MovieDescription from "./MovieDescription";

const FirstMovie = () => {
    return (
        <>
            <div className="px-[44px] text-center z-1 ">
                <h1 className="font-bold text-[33px]">
                    Naruto Shippuden: The Movie
                </h1>
                <MovieInfo date={"2007"} />
                <MovieDescription
                    description="So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine
            intervention or the kinship of all living things but I tell you
            Jerry at that moment, I was a marine biologist."
                />
            </div>
        </>
    );
};

export default FirstMovie;
