import React from "react";
import Button from "../Button/Button";
import InputWithIcon, { InputWithIconProps } from "./InputWithIcon";

export interface InputWithOptionalButtonProps extends InputWithIconProps {
    button?: boolean;
    button_title?: string;
    button_onClickHandler?: () => void;
    button_type?: "submit" | "button";
}

const InputWithOptionalButton = ({
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
    button = false,
    button_title = "",
    button_type = "button",
    button_onClickHandler = null,
}: InputWithOptionalButtonProps) => {
    return (
        <div className="flex w-full">
            <InputWithIcon
                type={type}
                name={name}
                value={value}
                setData={setData}
                className={`${className}  ${
                    button && "rounded-r-none border-r-0"
                }`}
                state_name={state_name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                icon_className={icon_className}
                icon_name={icon_name}
                icon_type={icon_type}
            />
            {button && (
                <Button
                    type={button_type}
                    onClick={button_onClickHandler}
                    className="text-black bg-white px-4 rounded-l-[0] button-hover"
                >
                    {button_title}
                </Button>
            )}
        </div>
    );
};

export default InputWithOptionalButton;
