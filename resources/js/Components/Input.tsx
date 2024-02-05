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
    state_name?: string;
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
    state_name,
}: InputProps) => {
    const state_to_change = state_name ? state_name : name;

    return (
        <input
            type={type}
            id={id}
            name={name}
            autoComplete={autoComplete ? autoComplete : name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                formElementsOnChangeHandler(e, state_to_change, setData);
            }}
            className={`w-full h-elements_height bg-black  rounded-10 border-2 border-grey placeholder-grey focus:border-grey focus:ring-0  ${className}`}
        />
    );
};

export default Input;

// the value prop is the current state for double binding,
// the state_name prop is a string that tells which state we should go update in the function,
// so while the value prop is the state itself, the state_name is just a string with the name of the state
