import React from "react";

interface InputLabelProps {
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
            className={`auth_label_link inline-block mb-1 ${className}`}
        >
            {value}
        </label>
    );
}
