import React from "react";

const Icon = ({ icon }) => {
    return (
        <i
            className={`fa-solid fa-${icon} absolute left-3 text-xl text-contrast`}
        ></i>
    );
};

export default Icon;
