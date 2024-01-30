import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardPlayButton from "./MovieCardPlayButton";
import Card from "./Card";

interface MovieCardProps {
    thumbnail_path: string;
    apply_css?: boolean;
    visible_cards: number;
}

const MovieCard = ({
    thumbnail_path,
    apply_css = true,
    visible_cards,
}: MovieCardProps) => {
    return (
        <Card
            route_name={"home"}
            visible_cards={visible_cards}
            apply_css={apply_css}
        >
            <MovieCardImage thumbnail_path={thumbnail_path} />
            <MovieCardPlayButton />
        </Card>
    );
};

export default MovieCard;
