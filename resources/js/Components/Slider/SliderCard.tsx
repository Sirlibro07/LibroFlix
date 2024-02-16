import React from "react";
import Card, { CardProps } from "../Card/Card";

interface SliderCardProps extends Omit<CardProps, "className"> {}

const SliderCard = ({ thumbnail_path, title }: SliderCardProps) => {
    return (
        <Card title={title} thumbnail_path={thumbnail_path} className="block" />
    );
};

export default SliderCard;
