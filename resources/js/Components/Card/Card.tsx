import React from "react";
import CardImage, { CardImageProps } from "./CardImage";
import CardPlayIcon from "./CardPlayIcon";
import { Link } from "@inertiajs/react";

export interface CardProps extends CardImageProps {
    slug: string;
    className?: string;
}

const Card = ({ thumbnail_path, slug, className = "" }: CardProps) => {
    return (
        <Link
            className={`group aspect-card 
                hover-shrink shrink-0 relative ${className}`}
            href={route("movies.show", { slug })}
        >
            <CardImage thumbnail_path={thumbnail_path} />
            <CardPlayIcon />
        </Link>
    );
};

export default Card;
