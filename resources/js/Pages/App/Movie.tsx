import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import MovieContent from "@/Components/Movie/MovieContent";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

const Show = ({ movie, watchlisted }) => {
    const renderMovieContent = (children: ReactNode) => {
        return (
            <AppLayout
                head_title="Movie"
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
                {children}
            </AppLayout>
        );
    };

    return (
        <>
            {renderMovieContent(
                <MovieContent watchlisted={watchlisted} movie={movie.data} />
            )}
        </>
    );
};
export default Show;
