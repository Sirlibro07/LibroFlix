import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import "../Helpers/CSS/borders.css";
import "./CSS/AppLayout.css";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";

const AppLayout = ({ user, children, className = "" }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

    return (
        <>
            <UserContext.Provider
                value={{ name: user.name, email: user.email }}
            >
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
                            (isMenuVisible || isSearchbarVisible) &&
                            "brightness-[30%]"
                        }  ${className}`}
                    >
                        {children}
                    </section>
                </Menu_Searchbar_Context.Provider>
            </UserContext.Provider>
        </>
    );
};

export default AppLayout;
