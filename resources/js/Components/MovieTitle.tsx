import React from "react";

interface MovieTitleProps {
    title: string;
    className?: string;
    version?: string;
}

const MovieTitle = ({ title, className, version = "" }: MovieTitleProps) => {
    return (
        <h1 className={`font-semibold whitespace-pre-line ${className}`}>{`${
            version && `${version}:\n`
        } ${title}`}</h1>
    );
};

export default MovieTitle;
