import React from "react";
import NavbarItemsCloseOverlay from "./NavbarItemsCloseOverlay";
import NavbarContent from "./NavbarContent";

interface NavbarProps {
    border: boolean;
}

const Navbar = ({ border }: NavbarProps) => {
    return (
        <header
            className={`body-padding ${
                border && "border-b border-grey border-solid"
            }`}
        >
            <nav
                className={`relative h-navbar_height flex  items-center justify-between`}
            >
                <NavbarContent />
            </nav>
            <NavbarItemsCloseOverlay />
        </header>
    );
};

export default Navbar;
