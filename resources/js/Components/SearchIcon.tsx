import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import React, { useContext } from "react";
import NavbarIconsOnClickhandler from "@/Shared/NavbarIconsOnClickhandler";
import Icon from "./Icon";

interface SearchIconProps {
    className?: string;
}

const SearchIcon = ({ className }: SearchIconProps) => {
    const { setIsMenuVisible } = useContext(Menu_Searchbar_Context);
    const { setIsSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const handleOnclick = () => {
        NavbarIconsOnClickhandler(setIsSearchbarVisible, setIsMenuVisible);
    };

    return (
        <Icon
            icon="magnifying-glass"
            className={`text-[1.563rem] mr-4 ${className}`}
            onClick={handleOnclick}
        />
    );
};

export default SearchIcon;
