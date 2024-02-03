import { Link } from "@inertiajs/react";
import React from "react";
import SliderCardImage from "./SliderCardImage";
import SliderCardPlayButton from "./SliderCardPlayButton";
import "../Helpers/CSS/slider_card.css";

interface SliderCardProps {
    className?: string;
    underscoreToSpace: string;
    title: string;
}

const SliderCard = ({
    className = "",
    underscoreToSpace,
    title,
}: SliderCardProps) => {
    return (
        <Link
            className={`slider_card group w-full max-w-[250px] lg:max-w-none shrink-0 relative aspect-card 
                hover-shrink ${className}`}
            href={route("movies.show", { title })}
        >
            <SliderCardImage underscoreToSpace={underscoreToSpace} />
            <SliderCardPlayButton />
        </Link>
    );
};

export default SliderCard;
