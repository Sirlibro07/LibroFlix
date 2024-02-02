import React from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const NavbarAccountLinks = () => {
    return (
        <div className="text-base w-full  sm:flex sm:gap-x-3 lg:absolute lg:top-0 lg:right-4 lg:flex lg:items-center lg:h-full lg:w-fit">
            <a href={route("login")} className="block w-full lg:w-auto lg:px-4">
                <SecondaryButton className="w-full mb-3 lg:px-4 lg:mb-0">
                    Log In
                </SecondaryButton>
            </a>
            <a href={route("register")} className="block w-full lg:w-auto">
                <PrimaryButton className="w-full lg:px-4">
                    Sign Up
                </PrimaryButton>
            </a>
        </div>
    );
};

export default NavbarAccountLinks;
// was forced to use normal <a> links because of rendering bugs
