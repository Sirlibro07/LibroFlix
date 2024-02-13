import React from "react";
import Input, { InputProps } from "./Input";
import Icon, { IconProps } from "../Global/Icon";

export interface InputWithIconProps
    extends InputProps,
        Omit<IconProps, "className" | "onClick"> {
    icon_className?: string;
}
const InputWithIcon = ({
    type = "",
    name,
    placeholder = "",
    autoComplete,
    value,
    className = "",
    setData,
    state_name,
    icon_className = "",
    icon_name,
    icon_type,
}: InputWithIconProps) => {
    return (
        <div className="relative w-full flex  items-center">
            <Input
                type={type}
                name={name}
                value={value}
                setData={setData}
                className={`${className}`}
                state_name={state_name}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
            <Icon
                icon_name={icon_name}
                icon_type={icon_type}
                className={`absolute left-4 text-grey pointer-events-none ${icon_className}`}
            />
        </div>
    );
};

export default InputWithIcon;
