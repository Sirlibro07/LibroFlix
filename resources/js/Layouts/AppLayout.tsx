import React, { ReactNode, useState } from "react";
import "../Helpers/CSS/borders.css";
import "../Helpers/CSS/navbar_visibility.css";
import "./CSS/AppLayout.css";
import "../Helpers/CSS/letter_spacing.css";
import "../Helpers/CSS/scrollbar.css";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";
import Navbar from "@/Components/Navbar";
import AppLayoutChildren from "@/Components/AppLayoutChildren";
import AppLayoutBackgoundImage from "@/Components/AppLayoutBackgoundImage";

const AppLayout = ({
    user,
    isLoggedIn,
    children,
    className = "",
    bg_image = false,
    border = true,
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

    const renderWithProviders = (children: ReactNode) => {
        return (
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
                    {children}
                </Menu_Searchbar_Context.Provider>
            </UserContext.Provider>
        );
    };

    const onClickHandler = () => {
        setIsMenuVisible(false);
        setIsSearchbarVisible(false);
    };

    return (
        <>
            {renderWithProviders(
                <>
                    <Navbar
                        border={border}
                        onClickHandler={onClickHandler}
                        isMenuVisible={isMenuVisible}
                        isSearchbarVisible={isSearchbarVisible}
                    />
                    <AppLayoutChildren
                        isMenuVisible={isMenuVisible}
                        isSearchbarVisible={isSearchbarVisible}
                        className={className}
                        onClickHandler={onClickHandler}
                    >
                        {children}
                    </AppLayoutChildren>
                    {bg_image && <AppLayoutBackgoundImage />}
                </>
            )}
        </>
    );
};

export default AppLayout;
