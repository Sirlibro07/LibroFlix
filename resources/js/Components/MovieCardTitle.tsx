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
            className="opacity-0 absolute bottom-3 font-medium left-3 right-3 whitespace-pre-line overflow-hidden md:opacity-100"
        >
            {title}
        </p>
    );
};

export default MovieCardTitle;
