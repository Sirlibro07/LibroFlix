import React from "react";
import MovieInfo from "./MovieInfo";
import MovieDescription from "./MovieDescription";
import GeneralLink from "./GeneralLink";

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

                <GeneralLink
                    route_name={"home"}
                    border={false}
                    className="bg-contrast text-body font-medium block py-[10px] mt-6 rounded-10"
                >
                    Watch Now
                </GeneralLink>
            </div>
        </>
    );
};

export default FirstMovie;
