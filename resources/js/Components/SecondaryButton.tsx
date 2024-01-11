import React, { ReactNode } from "react";
import Button from "./Button";

interface SecondaryButtonProps {
    className?: string;
    children: ReactNode;
}

export default function SecondaryButton({
    className = "",
    children,
}: SecondaryButtonProps) {
    return (
        <Button
            className={`bg-secondary  lg:h-normal_btn ${className}`}
            custom_margin_top="mt-0"
        >
            {children}
        </Button>
    );
}
