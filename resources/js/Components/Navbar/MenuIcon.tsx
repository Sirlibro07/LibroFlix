import NavbarContext from "@/Contexts/NavbarContext";
import NavbarIconsOnClickhandler from "@/Helpers/functions/navbar/NavbarIconsOnClickhandler";
import React, { useContext } from "react";
import "@/CSS/menu_icon.css";

const MenuIcon = () => {
    const { isMenuVisible } = useContext(NavbarContext);
    const { setIsMenuVisible } = useContext(NavbarContext);

    const { setIsSearchbarVisible } = useContext(NavbarContext);

    const handleOnclick = () => {
        NavbarIconsOnClickhandler(setIsMenuVisible, setIsSearchbarVisible);
    };
    const bars = [1, 2, 3];

    return (
        <div
            className={`w-fit cursor-pointer ${
                isMenuVisible && "change"
            } lg:hidden`}
            onClick={handleOnclick}
        >
            {bars.map((_, index) => (
                <div
                    key={index}
                    className={`bar${
                        index + 1
                    } w-8 h-[0.25rem] my-[0.375rem] bg-white transition-all duration-200`}
                ></div>
            ))}
        </div>
    );
};

export default MenuIcon;
