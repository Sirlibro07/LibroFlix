import MoviesContext from "@/Contexts/MoviesContext";
import React, { useContext } from "react";
import Slider from "../Slider/Slider";

interface SearchPageContentProps {
    title: string;
}

const SearchPageContent = ({ title }: SearchPageContentProps) => {
    const movies = useContext(MoviesContext).data;
    const name = movies.length
        ? `Results for "${title}"`
        : `No Results found for "${title}"`;

    return (
        <Slider
            total_cards={movies.length}
            title={name}
            slider_title_className="mt-10"
        />
    );
};

export default SearchPageContent;
