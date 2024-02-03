import React from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import Button from "./Button";

const NavbarAccountLinks = () => {
    return (
        <div className="text-base w-full flex gap-3 px-4 lg:absolute lg:top-0 lg:right-4 lg:flex lg:items-center lg:h-full lg:w-fit">
            <a href={route("login")} className="block w-full lg:w-auto lg:px-4">
                <Button className="w-full lg:px-4">Log in</Button>
            </a>
            <a href={route("register")} className="block w-full lg:w-auto">
                <Button className="w-full bg-brand lg:px-4 ">Sign up</Button>
            </a>
        </div>
    );
};

export default NavbarAccountLinks;
// was forced to use normal <a> links because of rendering bugs
