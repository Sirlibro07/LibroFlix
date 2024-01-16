import React from "react";

interface MovieDescriptionProps {
    description: string;
    className?: string;
}

const MovieDescription = ({
    description,
    className = "",
}: MovieDescriptionProps) => {
    return (
        <p
            style={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
            }}
            className={`text-light_color overflow-hidden ${className}`}
        >
            {description}
        </p>
    );
};

export default MovieDescription;
