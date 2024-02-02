import MoviePageContent from "@/Components/MoviePageContent";
import Movie_Season_BackgroundImage from "@/Components/Movie_Season_BackgroundImage";
import MovieContext from "@/Contexts/MovieContext";
import thumbnail_path from "@/Helpers/thumbnail_path";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

export default function Movie({ auth, isLoggedIn, movie }) {
    console.log(movie.data.title);

    const renderMovieContent = (children: ReactNode) => {
        return (
            <AppLayout
                user={auth.user}
                isLoggedIn={isLoggedIn}
                border={false}
                bg_image={
                    <Movie_Season_BackgroundImage
                        title={thumbnail_path(movie.data.title)}
                    />
                }
                body_padding={false}
            >
                <MovieContext.Provider value={movie}>
                    {children}
                </MovieContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderMovieContent(<MoviePageContent />)}</>;
}
