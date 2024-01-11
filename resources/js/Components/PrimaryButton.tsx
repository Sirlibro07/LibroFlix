import React, { ReactNode } from "react";
import Button from "./Button";

interface PrimaryButtonProps {
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    custom_margin_top?: string;
}

export default function PrimaryButton({
    disabled = null,
    className = "",
    custom_margin_top = "",
    children,
}: PrimaryButtonProps) {
    return (
        <Button
            disabled={disabled}
            className={`bg-brand ${className}`}
            custom_margin_top={custom_margin_top}
        >
            {children}
        </Button>
    );
}
