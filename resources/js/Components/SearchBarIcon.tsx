import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import React, { useContext } from "react";

interface SearchBarIconProps {
    className?: string;
}

const SearchBarIcon = ({ className }: SearchBarIconProps) => {
    const isSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).isSearchbarVisible;
    const setIsSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).setIsSearchbarVisible;

    const handleOnclick = () => {
        setIsSearchbarVisible((isSearchbarVisible) => !isSearchbarVisible);
    };

    return (
        <i
            onClick={handleOnclick}
            className={`fa-solid fa-magnifying-glass cursor-pointer text-white text-[1.563rem] mr-4 ${className}`}
        ></i>
    );
};

export default SearchBarIcon;
