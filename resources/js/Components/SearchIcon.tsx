import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import React, { useContext } from "react";
import NavbarIconsOnClickhandler from "@/Helpers/NavbarIconsOnClickhandler";

interface SearchIconProps {
    className?: string;
}

const SearchIcon = ({ className }: SearchIconProps) => {
    const setIsMenuVisible = useContext(
        Menu_Searchbar_Context
    ).setIsMenuVisible;
    const setIsSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).setIsSearchbarVisible;

    const handleOnclick = () => {
        NavbarIconsOnClickhandler(setIsSearchbarVisible, setIsMenuVisible);
    };

    return (
        <i
            onClick={handleOnclick}
            className={`fa-solid fa-magnifying-glass text-contrast text-[1.563rem] mr-4 ${className}`}
        ></i>
    );
};

export default SearchIcon;
