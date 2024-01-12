import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import "../Helpers/CSS/borders.css";
import "../Helpers/CSS/navbar_visibility.css";
import "./CSS/AppLayout.css";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";

const AppLayout = ({ user, isLoggedIn, children, className = "" }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

    return (
        <>
            <UserContext.Provider
                value={{
                    isLoggedIn: isLoggedIn,
                    name: isLoggedIn ? user.name : "",
                    email: isLoggedIn ? user.email : "",
                }}
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
                            "lower_brightness"
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
