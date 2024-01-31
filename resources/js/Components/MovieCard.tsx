import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardPlayButton from "./MovieCardPlayButton";
import Card from "./Card";

interface MovieCardProps {
    thumbnail_path: string;
    visible_cards: number;
}

const MovieCard = ({ thumbnail_path, visible_cards }: MovieCardProps) => {
    return (
        <Card route_name={"home"} visible_cards={visible_cards}>
            <MovieCardImage thumbnail_path={thumbnail_path} />
            <MovieCardPlayButton />
        </Card>
    );
};

export default MovieCard;
