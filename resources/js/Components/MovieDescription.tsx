import React from "react";

interface MovieDescriptionProps {
    description: string;
}

const MovieDescription = ({ description }: MovieDescriptionProps) => {
    return (
        <p
            style={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
            }}
            className="text-light_color overflow-hidden "
        >
            {description}
        </p>
    );
};

export default MovieDescription;
