import React from "react";
import CardImage, { CardImageProps } from "./CardImage";
import CardPlayIcon from "./CardPlayIcon";
import { Link } from "@inertiajs/react";

export interface CardProps extends CardImageProps {
    title: string;
    className?: string;
}

const Card = ({ thumbnail_path, title, className = "" }: CardProps) => {
    return (
        <Link
            className={`group aspect-card 
                hover-shrink shrink-0 relative ${className}`}
            href={route("movies.show", { title })}
        >
            <CardImage thumbnail_path={thumbnail_path} />
            <CardPlayIcon />
        </Link>
    );
};

export default Card;
