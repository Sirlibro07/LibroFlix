import React from "react";
import MovieImg from "./MovieImg";
import MovieBlur from "./MovieBlur";
import MovieDetails from "./MovieDetails";
import MovieType from "@/Helpers/Types/MovieType";

export interface MovieContentProps {
    movie: MovieType;
}

const MovieContent = ({ movie }: MovieContentProps) => {
    return (
        <>
            <MovieBlur />
            <div className="relative mb-8 body-padding py-4 h-fit mt-[21.875rem]   bg-black rounded-tl-[1.563rem] rounded-tr-[1.563rem] md:flex md:items-start md:rounded-none md:mt-[-1.25rem]">
                <MovieImg title={movie.title} />
                <MovieDetails movie={movie} />
            </div>
        </>
    );
};

export default MovieContent;
