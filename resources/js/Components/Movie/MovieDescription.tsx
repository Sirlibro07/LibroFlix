import React from "react";

export interface MovieDescriptionProps {
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
                <h2 className="mt-10 mb-4 font-medium">Description:</h2>
            )}
            <h3 className={`text-light_grey overflow-hidden ${className}`}>
                {description}
            </h3>
        </>
    );
};

export default MovieDescription;
