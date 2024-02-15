import React, { ReactNode } from "react";
import Button, { ButtonProps } from "./Button";
import Icon, { IconProps } from "../Global/Icon";

export interface ButtonWithIconProps
    extends ButtonProps,
        Omit<IconProps, "className" | "onClick"> {
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
    type = "button",
}: ButtonWithIconProps) => {
    return (
        <Button type={type} className={`pl-3 pr-4 ${className}`}>
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
