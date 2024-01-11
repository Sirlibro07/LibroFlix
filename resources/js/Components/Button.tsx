import React, { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    custom_margin_top?: string;
    children: ReactNode;
}

const Button = ({
    className = "",
    disabled = null,
    custom_margin_top = "",
    children,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={`w-full h-auth_input_btn ${
                custom_margin_top ? custom_margin_top : "mt-7"
            }  text-contrast font-medium rounded-10 ${className} ${
                disabled && "opacity-90"
            } `}
        >
            {children}
        </button>
    );
};

export default Button;
