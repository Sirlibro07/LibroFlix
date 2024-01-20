import React from "react";

interface MovieCardTitleProps {
    title: string;
}

const MovieCardTitle = ({ title }: MovieCardTitleProps) => {
    return (
        <p className="absolute bottom-3 left-3 whitespace-pre-line">{title}</p>
    );
};

export default MovieCardTitle;
