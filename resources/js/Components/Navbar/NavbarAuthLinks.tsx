import React from "react";
import NavbarAuthLink from "./NavbarAuthLink";

const NavbarAuthLinks = () => {
    return (
        <div
            className={`text-base w-full flex gap-3 px-4 lg:top-0 lg:flex lg:items-center lg:h-full lg:w-fit lg:p-0 lg:absolute lg:right-0 `}
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
