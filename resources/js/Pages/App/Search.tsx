import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MoviesContext from "@/Contexts/MoviesContext";
import SearchContent from "@/Components/Search/SearchContent";

const Index = ({ movies, title }) => {
    const renderSearchPageContent = (children: ReactNode) => {
        const name = movies.data.length
            ? `Results for "${title}"`
            : `No Results found for "${title}"`;
        return (
            <AppLayout
                head_title="Search"
                header_className="text-center mt-[4.375rem] mb-[3.75rem] lg:mt-[5.625rem] lg:mb-[4.375rem] lg:text-typescale_67px "
                header_name={name}
            >
                <MoviesContext.Provider value={movies}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderSearchPageContent(<SearchContent />)}</>;
};
export default Index;
