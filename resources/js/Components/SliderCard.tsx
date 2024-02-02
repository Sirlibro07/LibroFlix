import { Link } from "@inertiajs/react";
import React from "react";
import SliderCardImage from "./SliderCardImage";
import SliderCardPlayButton from "./SliderCardPlayButton";
import "../Helpers/CSS/slider_card.css";

interface SliderCardProps {
    className?: string;
    route_name: string;
    thumbnail_path: string;
}

const SliderCard = ({
    className = "",
    route_name,
    thumbnail_path,
}: SliderCardProps) => {
    return (
        <Link
            className={`slider_card group w-full max-w-[250px] lg:max-w-none shrink-0 relative aspect-card 
                hover-shrink ${className}`}
            href={route(route_name)}
        >
            <SliderCardImage thumbnail_path={thumbnail_path} />
            <SliderCardPlayButton />
        </Link>
    );
};

export default SliderCard;
