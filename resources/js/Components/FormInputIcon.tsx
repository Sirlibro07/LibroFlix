import React from "react";
import Icon from "./Icon";

const FormInputIcon = ({ icon }) => {
    return (
        <Icon
            icon={icon}
            className="absolute left-4 pointer-events-none text-xl opacity-50"
        />
    );
};

export default FormInputIcon;
