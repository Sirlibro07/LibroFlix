import React from "react";

interface HeadingProps {
    name: string;
    className?: string;
}

const Heading = ({ name, className = "" }: HeadingProps) => {
    return (
        <h1
            className={`font-medium text-typescale_38px font-display ${className}`}
        >
            {name}
        </h1>
    );
};

export default Heading;
