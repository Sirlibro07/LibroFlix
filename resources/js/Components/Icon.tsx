import React from "react";

const Icon = ({ icon }) => {
    return (
        <i className={`fa-solid fa-${icon} absolute text-xl text-contrast`}></i>
    );
};

export default Icon;
