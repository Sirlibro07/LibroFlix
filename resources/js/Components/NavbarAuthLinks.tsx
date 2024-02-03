import React from "react";
import NavbarAuthLink from "./NavbarAuthLink";

const NavbarAuthLinks = () => {
    return (
        <div className="text-base w-full flex gap-3 px-4 lg:absolute lg:top-0 lg:right-4 lg:flex lg:items-center lg:h-full lg:w-fit">
            <NavbarAuthLink route_name="login" link_className="lg:px-4">
                Log in
            </NavbarAuthLink>
            <NavbarAuthLink route_name="register" button_className="bg-brand">
                Sign up
            </NavbarAuthLink>
        </div>
    );
};

export default NavbarAuthLinks;
// was forced to use normal <a> links because of rendering bugs
