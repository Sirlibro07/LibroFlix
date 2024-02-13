import React from "react";
import Icon, { IconProps } from "../Global/Icon";

export interface FormInputIconProps
    extends Omit<IconProps, "onClick" | "icon_type" | "className"> {}

const FormInputIcon = ({ icon_name }: FormInputIconProps) => {
    return (
        <Icon
            icon_name={icon_name}
            icon_type="solid"
            className="absolute left-4 text-grey pointer-events-none text-xl "
        />
    );
};

export default FormInputIcon;
