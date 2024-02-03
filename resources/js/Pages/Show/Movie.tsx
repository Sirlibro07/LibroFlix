import BackgroundImage from "@/Components/BackgroundImage";
import MoviePageContent from "@/Components/MoviePageContent";
import MovieContext from "@/Contexts/MovieContext";
import underscoreToSpace from "@/Helpers/underscoreToSpace";
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
                    <BackgroundImage
                        folder_name={`movies/${underscoreToSpace(
                            movie.data.title
                        )}`}
                        picture_classes="top-[90px] brightness-50"
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
