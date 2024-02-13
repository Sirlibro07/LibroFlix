import React from "react";

export interface InputLabelProps {
    value: string;
    className?: string;
    htmlFor: string;
}

export default function InputLabel({
    value,
    className = "",
    htmlFor,
}: InputLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`auth_label_link inline-block mb-2 ${className}`}
        >
            {value}
        </label>
    );
}
