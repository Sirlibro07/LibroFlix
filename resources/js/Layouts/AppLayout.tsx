import React, { ReactNode, useState } from "react";
import "../Helpers/CSS/borders.css";
import "../Helpers/CSS/navbar_visibility.css";
import "./CSS/AppLayout.css";
import "../Helpers/CSS/letter_spacing.css";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";
import AppLayoutChildren from "@/Components/AppLayoutChildren";

const AppLayout = ({
    user,
    isLoggedIn,
    children,
    className = "",
    css = "",
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

    return (
        <>
            {renderWithProviders(
                <AppLayoutChildren className={className}>
                    {children}
                </AppLayoutChildren>
            )}
            <style>{css}</style>
        </>
    );
};

export default AppLayout;
