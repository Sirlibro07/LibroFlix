import React from "react";
import Icon from "./Icon";

const FormInputIcon = ({ icon }) => {
    return (
        <Icon
            icon_name={icon}
            icon_type="solid"
            className="absolute left-4 pointer-events-none text-xl opacity-50"
        />
    );
};

export default FormInputIcon;
