import React from "react";
import formElementsOnChangeHandler from "@/Shared/formElementsOnChangeHandler";
import InputType from "@/Shared/interfaces/InputType";

const Input = ({
    type = "",
    name,
    placeholder = "",
    autoComplete,
    value,
    className = "",
    setData,
    state_name,
}: InputType) => {
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
            className={`w-full h-elements_height bg-black  rounded-10 border-2 border-grey placeholder-grey focus:border-grey focus:ring-0  ${className}`}
        />
    );
};

export default Input;
