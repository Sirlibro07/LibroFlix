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
                    

        a::after {
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

        a:hover::after {
            width: 50%;
        }

        `}
        </style>
    );

    return (
        <>
            <Link href={href} className={`relative  ${className}`}>
                {children}
            </Link>
            {border && css}
        </>
    );
};

export default GeneralLink;
