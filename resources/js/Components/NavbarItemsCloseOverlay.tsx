import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import React, { useContext } from "react";

interface NavbarItemsCloseOverlay {
    onClickHandler: () => void;
}

const NavbarItemsCloseOverlay = ({
    onClickHandler,
}: NavbarItemsCloseOverlay) => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

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
