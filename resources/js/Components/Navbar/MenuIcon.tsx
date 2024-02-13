import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import NavbarIconsOnClickhandler from "@/Shared/functions/NavbarIconsOnClickhandler";
import React, { useContext } from "react";
import "@/CSS/menu_icon.css";

const MenuIcon = () => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { setIsMenuVisible } = useContext(Menu_Searchbar_Context);

    const { setIsSearchbarVisible } = useContext(Menu_Searchbar_Context);

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
