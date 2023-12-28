import React from "react";
import onChangeHandler from "@/Helpers/onChangeHandler";

interface InputProps {
    type: string;
    id: string;
    name: string;
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
            onChange={(e) => {
                onChangeHandler(e, state, setData);
            }}
            className={`w-full h-auth_input_btn bg-body text-contrast rounded-10 text-input border-border_label focus:border-border_label focus:ring-0 focus:ring-white ${className}`}
        />
    );
};

export default Input;
