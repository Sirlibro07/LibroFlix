import MovieContext from "@/Contexts/MovieContext";
import React, { useContext } from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import PrimaryButton from "./PrimaryButton";
import MovieDescription from "./MovieDescription";

const MoviePageContent = () => {
    const movie = useContext(MovieContext).data;
    console.log(movie);

    return (
        <div className="body-padding py-4 h-fit mt-[300px] bg-black rounded-tl-[25px] rounded-tr-[25px]">
            <MovieTitle
                title={movie.title}
                version={movie.version}
                className="text-typescale_33_px"
            />
            <MovieInfo date={movie.year} />
            <MovieRating rating={movie.rating} className={""} />
            <PrimaryButton>Watch Now</PrimaryButton>

            <MovieDescription description={movie.description} />
        </div>
    );
};

export default MoviePageContent;
