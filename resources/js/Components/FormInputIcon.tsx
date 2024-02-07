import React from "react";
import Icon from "./Icon";

const FormInputIcon = ({ icon_name }) => {
    return (
        <Icon
            icon_name={icon_name}
            icon_type="solid"
            className="absolute left-4 pointer-events-none text-xl opacity-50"
        />
    );
};

export default FormInputIcon;
