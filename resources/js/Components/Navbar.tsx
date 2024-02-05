import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavbarItemsCloseOverlay from "./NavbarItemsCloseOverlay";

interface NavbarProps {
    onClickHandler: () => void;
    border: boolean;
}

const Navbar = ({ border, onClickHandler }: NavbarProps) => {
    return (
        <>
            <nav
                className={`body-padding relative h-navbar_height flex  items-center justify-between ${
                    border && "border-b border-grey border-solid"
                } lg:justify-normal`}
            >
                <Logo />
                <NavbarIcons />
                <NavbarLinks />
                <SearchBar />
            </nav>
            <NavbarItemsCloseOverlay onClickHandler={onClickHandler} />
        </>
    );
};

export default Navbar;
