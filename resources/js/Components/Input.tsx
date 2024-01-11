import React from "react";
import Input_Checkbox_onChangeHandler from "@/Helpers/Input_Checkbox_onChangeHandler";

interface InputProps {
    type: string;
    id: string;
    name: string;
    placeholder?: string;
    autoComplete?: string;
    value: string;
    className: string;
    setData: (PrevState: object) => void;
    state_to_change?: string;
}

const Input = ({
    type,
    id,
    name,
    placeholder = "",
    autoComplete,
    value,
    className,
    setData,
    state_to_change,
}: InputProps) => {
    const state = state_to_change ? state_to_change : name;

    return (
        <input
            type={type}
            id={id}
            name={name}
            autoComplete={autoComplete ? autoComplete : name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                Input_Checkbox_onChangeHandler(e, state, setData);
            }}
            className={`w-full h-auth_input_btn bg-body text-contrast rounded-10 text-input border-border_color placeholder-light_color focus:border-border_color focus:ring-0  ${className}`}
        />
    );
};

export default Input;
