import React from "react";

interface MovieTitleProps {
    title: string;
    className?: string;
    version?: string;
}

const MovieTitle = ({ title, className, version = "" }: MovieTitleProps) => {
    const getPrefix = (version: string) => {
        let prefix: string;

        switch (version) {
            case "Og":
                prefix = "Naruto Og";
                break;
            case "Shippuden":
                prefix = "Naruto Shippuden";
                break;
            case "Boruto":
                prefix = "Boruto";
                break;
            default:
                prefix = "Unknown version";
        }

        return prefix;
    };

    return (
        <h1 className={`font-semibold whitespace-pre-line ${className}`}>{`${
            version && `${getPrefix(version)}:\n`
        } ${title}`}</h1>
    );
};

export default MovieTitle;
