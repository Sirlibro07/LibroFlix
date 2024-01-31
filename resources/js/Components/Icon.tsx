import React from "react";

const Icon = ({ icon, className = "", onClick = null }) => {
    return (
        <i
            onClick={onClick}
            className={`fa-solid fa-${icon}  ${className}`}
        ></i>
    );
};

export default Icon;
