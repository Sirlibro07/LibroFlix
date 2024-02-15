import React, { ReactNode } from "react";
import ButtonWithIcon, { ButtonWithIconProps } from "./ButtonWithIcon";
import { IconProps } from "../Global/Icon";

interface ButtonOptionalIconProps extends ButtonWithIconProps {}

const ButtonOptionalIcon = ({
    icon_type,
    icon_name,
    children,
    type = "submit",
}: ButtonOptionalIconProps) => {
    return (
        <ButtonWithIcon
            type={type}
            icon_type={icon_name}
            icon_name={icon_type}
            className="w-full pl-0 pr-0 bg_brand md:block md:pl-3 md:pr-4 md:w-fit"
            icon_className="text-black hidden md:inline"
        >
            {children}
        </ButtonWithIcon>
    );
};

export default ButtonOptionalIcon;
