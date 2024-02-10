import React, { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    children: ReactNode;
    onClick?: () => void;
    type?: string;
}

const Button = ({
    className = "",
    disabled = null,
    children,
    onClick = null,
    type = "",
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick && onClick}
            disabled={disabled}
            className={`h-elements_height text-base font-medium rounded-10 ${className} ${
                disabled && "opacity-90"
            } `}
        >
            {children}
        </button>
    );
};

export default Button;
