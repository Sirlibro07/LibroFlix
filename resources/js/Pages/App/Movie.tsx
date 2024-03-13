import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import MovieContent from "@/Components/Movie/MovieContent";
import underscoreToSpace from "@/Helpers/functions/global/underscoreToSpace";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MovieResourceType from "@/Helpers/Types/MovieResourceType";
import MovieType from "@/Helpers/Types/MovieType";

interface MovieProps {
    movie: MovieResourceType<MovieType>;
}

const Movie = ({ movie }: MovieProps) => {
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

    return <>{renderMovieContent(<MovieContent movie={movie.data} />)}</>;
};
export default Movie;
