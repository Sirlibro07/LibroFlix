import React from "react";
import formElementsOnChangeHandler from "@/Helpers/formElementsOnChangeHandler";

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
    borders?: boolean;
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
    borders = false,
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
                formElementsOnChangeHandler(e, state, setData);
            }}
            className={`w-full h-auth_input_btn bg-body text-contrast  text-input ${
                borders ? "border-1" : "border-0 border-b-[1px]"
            } border-border_color placeholder-light_color focus:border-border_color focus:ring-0  ${className}`}
        />
    );
};

export default Input;

// the value prop is the current state for double binding,
// the state_to_change prop is a string that tells which state we should go update in the function,
// so while the value prop is the state itself, the state_to_change is just a string with the name of the state
