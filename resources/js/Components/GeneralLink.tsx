import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

interface GeneralLinkProps {
    href: string;
    className?: string;
    border?: boolean;
    children: ReactNode;
}

const GeneralLink = ({
    href,
    className = "",
    border = true,
    children,
}: GeneralLinkProps) => {
    const css = (
        <style>
            {`
                    

        .general_link::after {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            height: 2px;
            background-color: white; 
            transition: width 0.3s ease;
            width: 0%;
            border-radius: 1px;
        }

        .general_link:hover::after {
            width: 50%;
        }

        `}
        </style>
    );

    return (
        <>
            <Link
                href={href}
                className={`${border && "general_link"} relative  ${className}`}
            >
                {children}
            </Link>
            {border && css}
        </>
    );
};

export default GeneralLink;
