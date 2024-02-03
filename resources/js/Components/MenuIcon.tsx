import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import NavbarIconsOnClickhandler from "@/Helpers/NavbarIconsOnClickhandler";
import React, { useContext } from "react";

const MenuIcon = () => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { setIsMenuVisible } = useContext(Menu_Searchbar_Context);

    const { setIsSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const handleOnclick = () => {
        NavbarIconsOnClickhandler(setIsMenuVisible, setIsSearchbarVisible);
    };
    const bars = [1, 2, 3];

    return (
        <>
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
            <style>
                {`
                    .change .bar1 {
                        transform: translate(0,11px) rotate(-45deg);
                        }

                    .change .bar2 {opacity: 0;}

                    .change .bar3 {
                        transform: translate(0, -9px) rotate(45deg);
                    }
                `}
            </style>
        </>
    );
};

export default MenuIcon;
