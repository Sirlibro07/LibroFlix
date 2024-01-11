import { Link } from "@inertiajs/react";
import React from "react";

const GeneralLink = ({ href, className = "", children }) => {
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
            {css}
        </>
    );
};

export default GeneralLink;
