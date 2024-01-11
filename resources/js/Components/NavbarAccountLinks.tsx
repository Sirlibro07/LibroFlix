import React from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const NavbarAccountLinks = () => {
    return (
        <div className="text-base px-3 sm:flex sm:gap-x-3 lg:gap-x-6">
            <SecondaryButton className="lg:w-[91px]">Log In</SecondaryButton>
            <PrimaryButton
                custom_margin_top="mt-2"
                className="sm:mt-0  lg:w-[105px] lg:h-normal_btn"
            >
                Sign Up
            </PrimaryButton>
        </div>
    );
};

export default NavbarAccountLinks;
