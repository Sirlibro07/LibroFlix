import React from "react";

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
            <p className={` text-[#BBBBBB] overflow-hidden ${className}`}>
                {description}
            </p>
        </>
    );
};

export default MovieDescription;
