import React, { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    children: ReactNode;
}

const Button = ({ className = "", disabled = null, children }: ButtonProps) => {
    return (
        <button
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
