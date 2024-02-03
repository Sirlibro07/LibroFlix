import React from "react";
import "../Helpers/CSS/first_movie_description.css";

interface MovieDescriptionProps {
    description: string;
    className?: string;
    description_p?: boolean;
}

const MovieDescription = ({
    description,
    className = "",
    description_p = true,
}: MovieDescriptionProps) => {
    return (
        <>
            {description_p && (
                <p className="mt-10 mb-4 font-medium">Description:</p>
            )}
            <p className={` text-light_color overflow-hidden ${className}`}>
                {description}
            </p>
        </>
    );
};

export default MovieDescription;
