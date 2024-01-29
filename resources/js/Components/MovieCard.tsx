import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardPlayButton from "./MovieCardPlayButton";
import Card from "./Card";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    return (
        <Card route_name={"home"} cards_number={"5"}>
            <MovieCardImage thumbnail_path={thumbnail_path} />
            <MovieCardPlayButton />
        </Card>
    );
};

export default MovieCard;
