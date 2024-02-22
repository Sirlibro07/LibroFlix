import NavbarContext from "@/Contexts/NavbarContext";
import React, { useContext } from "react";
import NavbarIconsOnClickhandler from "@/Helpers/functions/navbar/NavbarIconsOnClickhandler";
import Icon from "../Global/Icon";

const SearchIcon = () => {
    const Context = useContext(NavbarContext);
    const { setIsMenuVisible } = Context;
    const { setIsSearchbarVisible } = Context;

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
