import React from "react";

interface HeaderProps {
    name: string;
    className?: string;
}

const Header = ({ name, className = "" }: HeaderProps) => {
    return (
        <h1
            className={`font-medium text-typescale_38px font-display ${className}`}
        >
            {name}
        </h1>
    );
};

export default Header;
