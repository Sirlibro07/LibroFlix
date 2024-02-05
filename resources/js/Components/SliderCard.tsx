import React from "react";
import "@/Helpers/CSS/slider_card.css";
import Card from "./Card";

interface SliderCardProps {
    thumbnail_path: string;
    title: string;
}

const SliderCard = ({ thumbnail_path, title }: SliderCardProps) => {
    return (
        <Card
            className={`slider_card group max-w-[15.625rem] lg:max-w-none shrink-0 relative
                hover-shrink`}
            title={title}
            thumbnail_path={thumbnail_path}
        />
    );
};

export default SliderCard;
