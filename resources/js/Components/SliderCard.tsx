import React from "react";
import "@/CSS/slider_card.css";
import SliderCardImage from "./SliderCardImage";
import SliderCardPlayIcon from "./SliderCardPlayIcon";
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
            <SliderCardImage thumbnail_path={thumbnail_path} />
            <SliderCardPlayIcon />
        </Link>
    );
};

export default SliderCard;
