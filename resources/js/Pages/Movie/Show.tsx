import BackgroundImage from "@/Components/BackgroundImage";
import MovieContent from "@/Components/MovieContent";
import MovieContext from "@/Contexts/MovieContext";
import underscoreToSpace from "@/Helpers/underscoreToSpace";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

export default function Show({ auth, isLoggedIn, movie }) {
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
                        picture_classes="top-navbar_height brightness-50 h-[380px] md:h-[410px]"
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

    return <>{renderMovieContent(<MovieContent />)}</>;
}
