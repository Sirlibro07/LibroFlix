import React, { ReactNode } from "react";
import Button from "./Button";

interface NavbarAuthLinkProps {
    route_name: string;
    link_className?: string;
    button_className?: string;
    children: ReactNode;
}

const NavbarAuthLink = ({
    route_name,
    link_className,
    button_className,
    children,
}: NavbarAuthLinkProps) => {
    return (
        <a
            href={route(route_name)}
            className={`block w-full lg:w-auto ${link_className}`}
        >
            <Button className={`w-full lg:px-4 ${button_className}`}>
                {children}
            </Button>
        </a>
    );
};

export default NavbarAuthLink;
