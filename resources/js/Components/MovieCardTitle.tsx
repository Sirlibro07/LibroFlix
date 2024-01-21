import React from "react";

interface MovieCardTitleProps {
    title: string;
}

const MovieCardTitle = ({ title }: MovieCardTitleProps) => {
    return (
        <p
            style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
            }}
            className="absolute bottom-3 font-medium left-3 right-3 whitespace-pre-line overflow-hidden"
        >
            {title}
        </p>
    );
};

export default MovieCardTitle;
