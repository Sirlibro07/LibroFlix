import { Link } from "@inertiajs/react";
import React from "react";
import SliderCardImage from "./SliderCardImage";
import SliderCardPlayButton from "./SliderCardPlayButton";

interface SliderCardProps {
    className?: string;
    route_name: string;
    visible_cards: number;
    thumbnail_path: string;
}

const SliderCard = ({
    className = "",
    route_name,
    visible_cards,
    thumbnail_path,
}: SliderCardProps) => {
    const css = (
        <style>{`
            .card
            {
                @media(min-width:1024px)
                {
                    width: calc(100%/${visible_cards} - 1rem)
                }
            }
            `}</style>
    );

    return (
        <>
            <Link
                className={`card group w-full max-w-[250px] lg:max-w-none shrink-0 relative aspect-card 
                hover-shrink ${className}`}
                href={route(route_name)}
            >
                <SliderCardImage thumbnail_path={thumbnail_path} />
                <SliderCardPlayButton />
            </Link>
            {css}
        </>
    );
};

export default SliderCard;
