import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

interface GeneralLinkProps {
    route_name: string;
    route_parameter?: string;
    className?: string;
    border?: boolean;
    key?: React.Key;
    children: ReactNode;
}

const GeneralLink = ({
    route_name,
    route_parameter = "",
    className = "",
    border = true,
    children,
}: GeneralLinkProps) => {
    return (
        <>
            <Link
                href={route(route_name, route_parameter)}
                className={`${
                    border && "custom_border"
                } relative rounded-10  ${className}`}
            >
                {children}
            </Link>
        </>
    );
};

export default GeneralLink;
