import React, { ReactNode, useState } from "react";
import "@/CSS/borders.css";
import "@/CSS/navbar_visibility.css";
import "@/CSS/letter_spacing.css";
import "@/CSS/scrollbar.css";
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

    const body_padding_style = body_padding ? "body-padding" : "";
    const low_brightness_style =
        isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : "";

    return (
        <>
            {renderWithProviders(
                <>
                    <Navbar border={border} />
                    {bg_image}
                    <div
                        className={`${body_padding_style} ${low_brightness_style} relative h-fit min-h-[calc(100vh+12.5rem)] pb-[15.625rem] flex flex-col justify-between`}
                    >
                        <AppLayoutChildren className={className}>
                            {children}
                        </AppLayoutChildren>
                        <Footer className={footer_className} />
                    </div>
                </>
            )}
        </>
    );
};

export default AppLayout;
