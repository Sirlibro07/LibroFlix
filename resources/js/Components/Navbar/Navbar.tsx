import React, { useContext } from "react";
import NavbarItemsCloseOverlay from "./NavbarItemsCloseOverlay";
import NavbarContent from "./NavbarContent";
import NavbarContext from "@/Contexts/NavbarContext";

const Navbar = () => {
    const { border } = useContext(NavbarContext);

    return (
        <>
            <nav
                className={`body-padding relative h-navbar_height flex  items-center justify-between ${
                    border &&
                    "border-b border-grey border-solid lg:justify-between "
                }`}
            >
                <NavbarContent />
            </nav>
            <NavbarItemsCloseOverlay />
        </>
    );
};

export default Navbar;
