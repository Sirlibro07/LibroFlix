import React from "react";
import Card, { CardProps } from "../Card/Card";

export interface GridCardProps extends Omit<CardProps, "className"> {}

const GridCard = ({ thumbnail_path, slug }: GridCardProps) => {
    return <Card slug={slug} thumbnail_path={thumbnail_path} />;
};

export default GridCard;
