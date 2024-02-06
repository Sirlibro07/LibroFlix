import React from "react";
import "@/CSS/slider_card.css";
import CardImage from "./CardImage";
import CardPlayIcon from "./CardPlayIcon";
import { Link } from "@inertiajs/react";

interface SliderCardProps {
    thumbnail_path: string;
    title: string;
}

const SliderCard = ({ thumbnail_path, title }: SliderCardProps) => {
    return (
        <Link
            className={`slider_card group aspect-card 
                hover-shrink max-w-[15.625rem] lg:max-w-none shrink-0 relative`}
            href={route("movies.show", { title })}
        >
            <CardImage thumbnail_path={thumbnail_path} />
            <CardPlayIcon />
        </Link>
    );
};

export default SliderCard;
