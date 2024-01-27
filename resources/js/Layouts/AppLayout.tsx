import React, { ReactNode, useState } from "react";
import "../Helpers/CSS/borders.css";
import "../Helpers/CSS/navbar_visibility.css";
import "./CSS/AppLayout.css";
import "../Helpers/CSS/letter_spacing.css";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";
import Navbar from "@/Components/Navbar";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import BackgroundImage from "@/Components/BackgroundImage";

const AppLayout = ({ user, isLoggedIn, children, className = "" }) => {
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

    const img = (version: string) => {
        return getBackgroundImg("first_movie", version);
    };

    return (
        <>
            {renderWithProviders(
                <>
                    <Navbar />
                    <section
                        className={`body-padding ${
                            isMenuVisible || isSearchbarVisible
                                ? "brightness-[30%]"
                                : ""
                        } ${className}`}
                        onClick={onClickHandler}
                    >
                        {children}
                    </section>
                    <div className="w-full absolute top-[5.625rem] bottom-0 z-[-1]">
                        <BackgroundImage
                            img_function={img}
                            picture_classes="w-full  h-[44rem]  md:h-[48.75rem]"
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default AppLayout;
