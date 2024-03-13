import React from "react";
import CardImg, { CardImgProps } from "./CardImg";
import CardPlayIcon from "./CardPlayIcon";
import { Link } from "@inertiajs/react";

export interface CardProps extends CardImgProps {
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
            <CardImg thumbnail_path={thumbnail_path} />
            <CardPlayIcon />
        </Link>
    );
};

export default Card;
