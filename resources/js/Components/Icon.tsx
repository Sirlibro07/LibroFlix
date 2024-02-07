import React from "react";

const Icon = ({
    icon_type,
    icon_name = "",
    className = "",
    onClick = null,
}) => {
    return (
        <i
            onClick={onClick}
            className={`fa-${icon_type} fa-${icon_name} ${className}`}
        ></i>
    );
};

export default Icon;
