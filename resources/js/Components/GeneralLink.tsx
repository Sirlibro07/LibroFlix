import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

interface GeneralLinkProps {
    href: string;
    className?: string;
    border?: boolean;
    key?: React.Key;
    children: ReactNode;
}

const GeneralLink = ({
    href,
    className = "",
    border = true,
    key = null,
    children,
}: GeneralLinkProps) => {
    return (
        <>
            <Link
                key={key && key}
                href={href}
                className={`${
                    border && "custom_border"
                } relative  ${className}`}
            >
                {children}
            </Link>
        </>
    );
};

export default GeneralLink;
