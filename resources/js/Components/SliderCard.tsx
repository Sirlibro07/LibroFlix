import React from "react";
import "../Helpers/CSS/slider_card.css";
import Card from "./Card";

interface SliderCardProps {
    thumbnail_path: string;
    title: string;
}

const SliderCard = ({ thumbnail_path, title }: SliderCardProps) => {
    return (
        <Card
            className={`slider_card group w-full max-w-[250px] lg:max-w-none shrink-0 relative aspect-card 
                hover-shrink`}
            title={title}
            thumbnail_path={thumbnail_path}
        />
    );
};

export default SliderCard;
