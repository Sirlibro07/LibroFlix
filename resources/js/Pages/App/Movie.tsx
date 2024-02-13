import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import MovieContent from "@/Components/Movie/MovieContent";
import MovieContext from "@/Contexts/MovieContext";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

const Show = ({ movie }) => {
    const renderMovieContent = (children: ReactNode) => {
        return (
            <AppLayout
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
                <MovieContext.Provider value={movie}>
                    {children}
                </MovieContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderMovieContent(<MovieContent />)}</>;
};
export default Show;
