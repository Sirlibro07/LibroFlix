import NavbarContext from "@/Contexts/NavbarContext";
import React, { useContext } from "react";

const NavbarItemsCloseOverlay = () => {
    const { isMenuVisible } = useContext(NavbarContext);
    const { isSearchbarVisible } = useContext(NavbarContext);
    const { setIsMenuVisible } = useContext(NavbarContext);
    const { setIsSearchbarVisible } = useContext(NavbarContext);

    const onClickHandler = () => {
        setIsMenuVisible(false);
        setIsSearchbarVisible(false);
    };

    return (
        <div
            onClick={onClickHandler}
            className={`w-full h-[calc(100%-5.625rem)] absolute top-navbar_height left-0 z-[1] ${
                isMenuVisible || isSearchbarVisible ? "block" : "hidden"
            }`}
        ></div>
    );
};

export default NavbarItemsCloseOverlay;
