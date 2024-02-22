import React from "react";
import formElementsOnChangeHandler from "@/Helpers/functions/form/formElementsOnChangeHandler";

export interface InputProps {
    type?: string;
    name: string;
    placeholder?: string;
    autoComplete?: string;
    value: string;
    className?: string;
    setData: (PrevState: object) => void;
    state_name?: string;
}

const Input = ({
    type = "",
    name,
    placeholder = "",
    autoComplete,
    value,
    className = "",
    setData,
    state_name,
}: InputProps) => {
    const state_to_change = state_name ? state_name : name;

    return (
        <input
            type={type ? type : "text"}
            id={name}
            name={name}
            autoComplete={autoComplete ? autoComplete : name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                formElementsOnChangeHandler(e, state_to_change, setData);
            }}
            className={`w-full h-elements_height bg-dark pr-4 rounded-10 border-2 border-transparent placeholder:text-grey focus:border-white focus:ring-0  ${className}`}
        />
    );
};

export default Input;
