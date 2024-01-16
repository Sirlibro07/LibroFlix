import React from "react";
import "../Helpers/CSS/first_movie_description.css";

interface MovieDescriptionProps {
    description: string;
    className?: string;
}

const MovieDescription = ({
    description,
    className = "",
}: MovieDescriptionProps) => {
    return (
        <>
            <p
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                }}
                className={`first_movie_description text-light_color overflow-hidden ${className} md:text-xl`}
            >
                {description}
            </p>
        </>
    );
};

export default MovieDescription;
