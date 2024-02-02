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
    return <Button className={`bg-black ${className}`}>{children}</Button>;
}
