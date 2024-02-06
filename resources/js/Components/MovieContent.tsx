import MovieContext from "@/Contexts/MovieContext";
import React, { useContext } from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieDescription from "./MovieDescription";
import MovieImg from "./MovieImg";
import Button from "./Button";
import ButtonWithIcon from "./ButtonWithIcon";
import MovieBlur from "./MovieBlur";
import MovieButtons from "./MovieButtons";

const MovieContent = () => {
    const movie = useContext(MovieContext).data;

    return (
        <>
            <MovieBlur />
            <div className="relative body-padding py-4 h-fit mt-[21.875rem]   bg-black rounded-tl-[1.563rem] rounded-tr-[1.563rem] md:flex md:items-start md:rounded-none md:mt-[-1.25rem]">
                <MovieImg title={movie.title} />

                <div>
                    <MovieTitle
                        title={movie.title}
                        className="text-typescale_33_px md:text-typescale-50px md:whitespace-normal"
                    />
                    <MovieInfo date={movie.year} />
                    <MovieRating
                        rating={movie.rating}
                        className={"mb-6 md:mb-5"}
                    />
                    <MovieButtons />
                    <MovieDescription
                        description={movie.description}
                        className="max-w-[90ch]"
                    />
                </div>
            </div>
        </>
    );
};

export default MovieContent;
