import React, { ReactNode } from "react";

interface PrimaryButtonProps {
    className?: string;
    disabled: boolean;
    children: ReactNode;
}

export default function PrimaryButton({
    className = "",
    disabled,
    children,
}: PrimaryButtonProps) {
    return (
        <button
            disabled={disabled}
            className={`w-full h-auth_input_btn mt-7 bg-brand text-white font-label rounded-10 ${
                disabled && "opacity-90"
            } ${className}`}
        >
            {children}
        </button>
    );
}
