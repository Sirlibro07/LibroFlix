import React, { ReactNode, useContext } from "react";
import Navbar from "./Navbar";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

interface AppLayoutChildrenProps {
    className: string;
    children: ReactNode;
}

const AppLayoutChildren = ({ className, children }: AppLayoutChildrenProps) => {
    const setIsMenuVisible = useContext(
        Menu_Searchbar_Context
    ).setIsMenuVisible;

    const setIsSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).setIsSearchbarVisible;

    const onClickHandler = () => {
        setIsMenuVisible(false);
        setIsSearchbarVisible(false);
    };

    return (
        <>
            <Navbar />
            <section
                className={`body-padding ${className}`}
                onClick={onClickHandler}
            >
                {children}
            </section>
        </>
    );
};

export default AppLayoutChildren;
