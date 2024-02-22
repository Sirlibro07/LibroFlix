import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import MovieContent, {
    MovieContentProps,
} from "@/Components/Movie/MovieContent";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MovieResourceType from "@/Shared/Types/MovieResourceType";

interface ShowProps extends Pick<MovieContentProps, "watchlisted"> {
    movie: MovieResourceType;
}

const Show = ({ movie, watchlisted }: ShowProps) => {
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
