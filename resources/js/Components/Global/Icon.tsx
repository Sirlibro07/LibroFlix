import React from "react";

export interface IconProps {
    icon_type: string;
    icon_name: string;
    className?: string;
    onClick?: () => void;
}

const Icon = ({
    icon_type,
    icon_name,
    className = "",
    onClick = null,
}: IconProps) => {
    return (
        <i
            onClick={onClick}
            className={`fa-${icon_type} fa-${icon_name} ${className}`}
        ></i>
    );
};

export default Icon;
