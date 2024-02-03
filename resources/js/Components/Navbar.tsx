import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavbarItemsCloseOverlay from "./NavbarItemsCloseOverlay";

interface NavbarProps {
    onClickHandler: () => void;
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
    border: boolean;
}

const Navbar = ({
    border,
    onClickHandler,
    isMenuVisible,
    isSearchbarVisible,
}: NavbarProps) => {
    return (
        <>
            <nav
                className={`body-padding relative bg-black flex  items-center justify-between ${
                    border && "border-b border-border_color border-solid"
                } lg:justify-normal`}
            >
                <Logo />
                <NavbarIcons />
                <NavbarLinks />
                <SearchBar />
            </nav>
            <NavbarItemsCloseOverlay
                onClickHandler={onClickHandler}
                isMenuVisible={isMenuVisible}
                isSearchbarVisible={isSearchbarVisible}
            />
        </>
    );
};

export default Navbar;
