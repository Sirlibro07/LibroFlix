import React from "react";

const Icon = ({
    icon_full_classname = "",
    icon = "",
    className = "",
    onClick = null,
}) => {
    return (
        <i
            onClick={onClick}
            className={`${
                icon_full_classname
                    ? icon_full_classname
                    : `fa-solid fa-${icon}`
            }  ${className}`}
        ></i>
    );
};

export default Icon;
