import IconType from "@/Shared/interfaces/IconType";
import React from "react";

interface IconProps extends IconType {
    className?: string;
    onClick?: () => void;
}

const Icon = ({
    icon_type,
    icon_name = "",
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
