import React from "react";
import Input, { InputProps } from "./Input";
import Button from "../Button/Button";

export interface InputWithButtonProps extends InputProps {
    button?: boolean;
    button_title?: string;
    button_onClickHandler?: () => void;
    button_type?: "submit" | "button";
}

const InputWithButton = ({
    type = "",
    name,
    placeholder = "",
    autoComplete,
    value,
    className = "",
    setData,
    state_name,
    button = false,
    button_title = "",
    button_type = "button",
    button_onClickHandler = null,
}: InputWithButtonProps) => {
    return (
        <>
            <Input
                type={type}
                name={name}
                value={value}
                setData={setData}
                className={`${className} ${
                    button && "rounded-r-none border-r-0"
                }`}
                state_name={state_name}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
            {button && (
                <Button
                    type={button_type}
                    onClick={button_onClickHandler}
                    className="text-black bg-white px-4 rounded-l-[0]  transitions hover:px-8"
                >
                    {button_title}
                </Button>
            )}
        </>
    );
};

export default InputWithButton;
