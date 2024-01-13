import React from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const NavbarAccountLinks = () => {
    return (
        <div className="text-base  px-3 sm:flex sm:gap-x-3 lg:absolute lg:top-0 lg:right-0 lg:flex lg:items-center lg:h-full lg:mr-4">
            <a href={route("login")} className="block w-full">
                <SecondaryButton className="lg:w-[91px]">
                    Log In
                </SecondaryButton>
            </a>
            <a href={route("register")} className="block w-full">
                <PrimaryButton
                    custom_margin_top="mt-2"
                    className="sm:mt-0  lg:w-[105px] lg:h-normal_btn"
                >
                    Sign Up
                </PrimaryButton>
            </a>
        </div>
    );
};

export default NavbarAccountLinks;
