import React from "react";
MovieTitle;
import MovieInfo from "./MovieInfo";
import MovieDescription from "./MovieDescription";
import GeneralLink from "./GeneralLink";
import MovieTitle from "./MovieTitle";
import MovieRating from "./MovieRating";
import FirstMovieLinks from "./FirstMovieLinks";

const FirstMovie = () => {
    return (
        <>
            <div className="px-[2.75rem] text-center z-1 md:text-start ">
                <MovieInfo
                    date={"2007"}
                    className="hidden md:flex md:justify-start md:mb-[-0.25rem]"
                />
                <MovieTitle
                    title="Naruto Shippuden: The Movie"
                    className="text-mobile_h1 md:text-desktop_h1 md:leading-[120%]"
                />
                <MovieRating rating={2.2} className="hidden md:flex my-2" />
                <MovieInfo date={"2007"} className="md:hidden" />
                <MovieDescription
                    className="mb-5"
                    description="So I started to walk into the water. I won't lie to you boys, I was
                                terrified. But I pressed on, and as I made my way past the breakers
                                a strange calm came over me. I don't know if it was divine
                                intervention or the kinship of all living things but I tell you
                                Jerry at that moment, I was a marine biologist."
                />

                <FirstMovieLinks />
            </div>
        </>
    );
};

export default FirstMovie;
