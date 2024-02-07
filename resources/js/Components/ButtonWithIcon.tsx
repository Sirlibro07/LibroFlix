import React from "react";
import Button from "./Button";
import Icon from "./Icon";

const ButtonWithIcon = ({
    className = "",
    children,
    icon_type,
    icon_name = "",
}) => {
    return (
        <Button className={`bg_brand pl-3 pr-4 ${className}`}>
            <Icon
                icon_type={icon_type}
                icon_name={icon_name}
                className="mr-3  text-[1.125rem]"
            />
            {children}
        </Button>
    );
};

export default ButtonWithIcon;
