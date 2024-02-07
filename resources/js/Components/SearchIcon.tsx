import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import React, { useContext } from "react";
import NavbarIconsOnClickhandler from "@/Shared/NavbarIconsOnClickhandler";
import Icon from "./Icon";

const SearchIcon = () => {
    const { setIsMenuVisible } = useContext(Menu_Searchbar_Context);
    const { setIsSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const handleOnclick = () => {
        NavbarIconsOnClickhandler(setIsSearchbarVisible, setIsMenuVisible);
    };

    return (
        <Icon
            onClick={handleOnclick}
            icon_type={"solid"}
            icon_name="magnifying-glass"
            className="cursor-pointer text-[1.563rem] mr-4 lg:hidden"
        />
    );
};

export default SearchIcon;
