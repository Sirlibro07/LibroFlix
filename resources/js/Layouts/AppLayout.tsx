import React, { ReactNode, useState } from "react";
import "@/Helpers/CSS/borders.css";
import "@/Helpers/CSS/navbar_visibility.css";
import "@/Helpers/CSS/AppLayout.css";
import "@/Helpers/CSS/letter_spacing.css";
import "@/Helpers/CSS/scrollbar.css";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";
import Navbar from "@/Components/Navbar";
import AppLayoutChildren from "@/Components/AppLayoutChildren";
import Footer from "@/Components/Footer";

const AppLayout = ({
    user,
    isLoggedIn,
    children,
    className = "",
    border = true,
    bg_image = <></>,
    body_padding = true,
    footer_className = "",
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
                    <Navbar border={border} onClickHandler={onClickHandler} />
                    <AppLayoutChildren
                        className={className}
                        body_padding={body_padding}
                    >
                        {children}
                    </AppLayoutChildren>
                    {bg_image}
                    <Footer className={footer_className} />
                </>
            )}
        </>
    );
};

export default AppLayout;
