import React from "react";

interface MovieTitleProps {
    title: string;
    className?: string;
}

const MovieTitle = ({ title, className }: MovieTitleProps) => {
    return (
        <h1 className={` whitespace-pre-line font-display ${className}`}>
            {title}
        </h1>
    );
};

export default MovieTitle;
