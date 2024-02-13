import React, { ReactNode } from "react";
import Button from "./Button";
import Icon from "../Global/Icon";
import IconType from "@/Shared/interfaces/IconType";

interface ButtonWithIconProps extends IconType {
    className?: string;
    icon_className?: string;
    children: ReactNode;
}

const ButtonWithIcon = ({
    className = "",
    children,
    icon_type,
    icon_name = "",
    icon_className = "",
}: ButtonWithIconProps) => {
    return (
        <Button className={`bg_brand pl-3 pr-4 ${className}`}>
            <Icon
                icon_type={icon_type}
                icon_name={icon_name}
                className={`mr-3 text-[1.125rem] ${icon_className}`}
            />
            {children}
        </Button>
    );
};

export default ButtonWithIcon;
