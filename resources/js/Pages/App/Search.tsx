import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MoviesContext from "@/Contexts/MoviesContext";
import SearchContent from "@/Components/Search/SearchContent";

const Index = ({ movies, title }) => {
    const renderSearchPageContent = (children: ReactNode) => {
        return (
            <AppLayout>
                <MoviesContext.Provider value={movies}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderSearchPageContent(<SearchContent title={title} />)}</>;
};
export default Index;
