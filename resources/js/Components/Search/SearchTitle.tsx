import MovieType from "@/Shared/Types/MovieType";
import React from "react";

export interface SearchTitleProps {
    title: string;
    movies: MovieType[];
}

const SearchTitle = ({ title, movies }: SearchTitleProps) => {
    const name = movies.length
        ? `Results for "${title}"`
        : `No Results found for "${title}"`;
    return (
        <h1 className="text-center text-typescale_33_px mt-[70px] mb-[60px] lg:mt-[90px] lg:mb-[70px]  lg:text-typescale_67px font-display">
            {name}
        </h1>
    );
};

export default SearchTitle;
