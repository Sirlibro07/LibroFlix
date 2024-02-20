import React from "react";
import NavbarItemsCloseOverlay from "./NavbarItemsCloseOverlay";
import NavbarContent from "./NavbarContent";

interface NavbarProps {
    border: boolean;
}

const Navbar = ({ border }: NavbarProps) => {
    return (
        <header className="body-padding">
            <nav
                className={`relative h-navbar_height flex  items-center justify-between ${
                    border &&
                    "border-b border-grey border-solid lg:justify-between "
                }`}
            >
                <NavbarContent />
            </nav>
            <NavbarItemsCloseOverlay />
        </header>
    );
};

export default Navbar;
