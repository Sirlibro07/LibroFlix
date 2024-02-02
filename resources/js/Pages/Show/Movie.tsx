import MoviePageContent from "@/Components/MoviePageContent";
import MovieContext from "@/Contexts/MovieContext";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

export default function Movie({ auth, isLoggedIn, movie }) {
    const renderMovieContent = (children: ReactNode) => {
        return (
            <AppLayout
                user={auth.user}
                isLoggedIn={isLoggedIn}
                border={false}
                bg_image={true}
            >
                <MovieContext.Provider value={movie}>
                    {children}
                </MovieContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderMovieContent(<MoviePageContent />)}</>;
}
