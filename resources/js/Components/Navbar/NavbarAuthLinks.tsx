import React from "react";
import NavbarAuthLink from "./NavbarAuthLink";

interface NavbarAuthLinksProps {
    className?: string;
}

const NavbarAuthLinks = ({ className = "" }: NavbarAuthLinksProps) => {
    return (
        <div
            className={`text-base w-full flex gap-3 px-4 lg:static lg:top-0 lg:right-4 lg:flex lg:items-center lg:h-full lg:w-fit ${className}`}
        >
            <NavbarAuthLink route_name="login" link_className="lg:px-4">
                Log in
            </NavbarAuthLink>
            <NavbarAuthLink route_name="register" button_className="bg_brand">
                Sign up
            </NavbarAuthLink>
        </div>
    );
};

export default NavbarAuthLinks;
