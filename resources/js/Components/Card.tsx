import { Link } from "@inertiajs/react";
import React from "react";
import CardImage from "./CardImage";
import CardPlayButton from "./CardPlayButton";

const Card = ({ className, title, thumbnail_path }) => {
    return (
        <Link
            className={` group   relative aspect-card 
                hover-shrink ${className}`}
            href={route("movies.show", { title })}
        >
            <CardImage thumbnail_path={thumbnail_path} />
            <CardPlayButton />
        </Link>
    );
};

export default Card;
