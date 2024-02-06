import React from "react";
import Button from "./Button";
import Icon from "./Icon";

const ButtonWithIcon = ({
    className = "",
    children,
    icon = "",
    icon_full_classname = "",
}) => {
    return (
        <Button className={`bg-brand pl-3 pr-4 ${className}`}>
            <Icon
                icon={icon}
                icon_full_classname={icon_full_classname}
                className="mr-3  text-[1.125rem]"
            />
            {children}
        </Button>
    );
};

export default ButtonWithIcon;
