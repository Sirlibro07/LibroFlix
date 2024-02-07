import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MoviesContext from "@/Contexts/MoviesContext";
import SearchPageContent from "@/Components/SearchPageContent";

const Index = ({ auth, movies, title }) => {
    const renderSearchPageContent = (children: ReactNode) => {
        return (
            <AppLayout user={auth.user}>
                <MoviesContext.Provider value={movies}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderSearchPageContent(<SearchPageContent title={title} />)}</>;
};
export default Index;
