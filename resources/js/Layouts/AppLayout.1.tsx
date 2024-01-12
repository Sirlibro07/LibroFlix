import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

export const AppLayout = ({ user, children, className = "" }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

    return (
        <Menu_Searchbar_Context.Provider
            value={{
                isMenuVisible: isMenuVisible,
                setIsMenuVisible: setIsMenuVisible,
                isSearchbarVisible: isSearchbarVisible,
                setIsSearchbarVisible: setIsSearchbarVisible,
            }}
        >
            <Navbar />
            <section
                className={`px-mobile_side_padding ${
                    (isMenuVisible || isSearchbarVisible) && "brightness-[30%]"
                }  ${className}`}
            >
                {children}
            </section>
        </Menu_Searchbar_Context.Provider>
    );
};
