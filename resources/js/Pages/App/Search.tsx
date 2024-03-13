import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MoviesContext from "@/Contexts/MoviesContext";
import SearchContent from "@/Components/Search/SearchContent";
import MovieResourceType from "@/Helpers/Types/MovieResourceType";
import MovieType from "@/Helpers/Types/MovieType";

interface SearchProps {
    movies: MovieResourceType<MovieType[]>;
    title: string;
}

const Search = ({ movies, title }: SearchProps) => {
    const renderSearchPageContent = (children: ReactNode) => {
        const name = movies.data.length
            ? `Results for "${title}"`
            : `No Results found for "${title}"`;
        return (
            <AppLayout
                head_title="Search"
                Heading_className="text-center mt-[2.375rem] mb-[3.75rem] lg:mt-[3.625rem] lg:mb-[4.375rem] lg:text-typescale_67px "
                Heading_name={name}
            >
                <MoviesContext.Provider value={movies}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderSearchPageContent(<SearchContent />)}</>;
};
export default Search;
