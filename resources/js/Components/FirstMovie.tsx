import React, { useContext } from "react";
MovieTitle;
import MovieInfo from "./MovieInfo";
import MovieDescription from "./MovieDescription";
import MovieTitle from "./MovieTitle";
import MovieRating from "./MovieRating";
import FirstMovieLinks from "./FirstMovieLinks";
import MoviesContext from "@/Contexts/MoviesContext";

const FirstMovie = () => {
    const movie3 = useContext(MoviesContext).data[3];
    console.log(movie3);

    return (
        <>
            <div className="text-center z-1 md:text-start mb-16 md:mb-[120px]   ">
                <MovieInfo
                    date={2007}
                    className="hidden md:flex md:justify-start md:mb-[-0.25rem] md:mt-4"
                />
                <MovieTitle
                    title={movie3.title}
                    version={movie3.version}
                    className="text-mobile_h1 whitespace-pre-line md:text-desktop_h1 md:leading-[120%]"
                />
                <MovieRating
                    rating={movie3.rating}
                    className="hidden md:flex my-2"
                />
                <MovieInfo
                    date={movie3.year}
                    className="mt-2 justify-center md:hidden"
                />
                <MovieDescription
                    className="mb-4 lg:w-4/6 xl:w-1/2 2xl:w-5/12 line-clamp-2 md:line-clamp-3 md:text-xl"
                    description={movie3.description}
                    description_p={false}
                />

                <FirstMovieLinks />
            </div>
        </>
    );
};

export default FirstMovie;
