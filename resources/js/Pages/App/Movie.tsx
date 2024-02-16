import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import MovieContent from "@/Components/Movie/MovieContent";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MoviesContext from "@/Contexts/MoviesContext";

const Show = ({ movie, watchlisted }) => {
    console.log(watchlisted);

    const renderMovieContent = (children: ReactNode) => {
        return (
            <AppLayout
                header_title="Movie"
                navbar_border={false}
                bg_image={
                    <BackgroundImage
                        folder_name={`movies/${underscoreToSpace(
                            movie.data.title
                        )}`}
                        picture_classes="top-navbar_height opacity-[.50] h-[23.75rem] md:h-[25.625rem]"
                    />
                }
                body_padding={false}
            >
                <MoviesContext.Provider value={movie}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return (
        <>{renderMovieContent(<MovieContent watchlisted={watchlisted} />)}</>
    );
};
export default Show;
