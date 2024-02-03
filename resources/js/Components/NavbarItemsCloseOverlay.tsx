import React from "react";

interface NavbarItemsCloseOverlay {
    onClickHandler: () => void;
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
}

const NavbarItemsCloseOverlay = ({
    onClickHandler,
    isMenuVisible,
    isSearchbarVisible,
}: NavbarItemsCloseOverlay) => {
    return (
        <div
            onClick={onClickHandler}
            className={`w-full h-[calc(100%-5.625rem)] absolute top-[5.625rem] left-0 z-[1] ${
                isMenuVisible || isSearchbarVisible ? "block" : "hidden"
            }`}
        ></div>
    );
};

export default NavbarItemsCloseOverlay;
