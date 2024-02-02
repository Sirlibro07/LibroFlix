import React from "react";
import "../Helpers/CSS/first_movie_description.css";

interface MovieDescriptionProps {
    description: string;
    className?: string;
    slice_lines?: boolean;
}

const MovieDescription = ({
    description,
    className = "",
    slice_lines = false,
}: MovieDescriptionProps) => {
    return (
        <>
            <p className="mt-10 mb-4">Description:</p>
            <p
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                }}
                className={`${
                    slice_lines && "first_movie_description"
                } text-light_color overflow-hidden ${className} md:text-xl`}
            >
                {description}
            </p>
        </>
    );
};

export default MovieDescription;
