import React from "react";
import "@/CSS/slider_card.css";
import Card, { CardProps } from "../Card/Card";

interface SliderCardProps extends Omit<CardProps, "className"> {
    title: string;
}

const SliderCard = ({ thumbnail_path, title }: SliderCardProps) => {
    return (
        <Card
            title={title}
            thumbnail_path={thumbnail_path}
            className="slider_card max-w-[15.625rem] lg:max-w-none"
        />
    );
};

export default SliderCard;
