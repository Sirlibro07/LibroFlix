import React from "react";
import formElementsOnChangeHandler from "@/Shared/functions/formElementsOnChangeHandler";

export interface CheckboxProps {
    className?: string;
    name: string;
    checked: any;
    setData: (PrevState: object) => void;
}

export default function Checkbox({
    className = "",
    name,
    checked,
    setData,
}: CheckboxProps) {
    return (
        <input
            onChange={(e) => {
                formElementsOnChangeHandler(e, name, setData);
            }}
            checked={checked}
            name={name}
            type="checkbox"
            className={`w-5 h-5 cursor-pointer rounded-full mr-2 bg-transparent text-black border-0 outline outline-1 outline-white  focus:bg-black  focus:ring-0 focus:ring-offset-1 focus:ring-offset-white ${className}`}
        />
    );
}
