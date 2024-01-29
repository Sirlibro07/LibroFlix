import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardPlayButton from "./MovieCardPlayButton";
import Card from "./Card";

interface MovieCardProps {
    thumbnail_path: string;
    apply_css?: boolean;
}

const MovieCard = ({ thumbnail_path, apply_css = true }: MovieCardProps) => {
    return (
        <Card route_name={"home"} cards_number={"5"} apply_css={apply_css}>
            <MovieCardImage thumbnail_path={thumbnail_path} />
            <MovieCardPlayButton />
        </Card>
    );
};

export default MovieCard;
