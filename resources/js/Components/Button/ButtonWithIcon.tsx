import React, { ReactNode } from "react";
import Button from "./Button";
import Icon, { IconProps } from "../Global/Icon";

interface ButtonWithIconProps extends Omit<IconProps, "className" | "onClick"> {
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
