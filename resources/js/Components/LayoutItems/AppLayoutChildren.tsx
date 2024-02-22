import React, { ReactNode, useContext } from "react";
import Header from "../Global/Header";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

export interface AppLayoutChildrenProps {
    className?: string;
    children: ReactNode;
    header_name?: string;
    header_className?: string;
    body_padding?: boolean;
    navbar?: boolean;
}

const AppLayoutChildren = ({
    className = "",
    children,
    header_name = "",
    header_className = "",
    body_padding = true,
    navbar = true,
}: AppLayoutChildrenProps) => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const body_padding_style = body_padding ? "body-padding" : "";
    const low_brightness_style =
        isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : "";

    return (
        <div
            className={`${body_padding_style} ${low_brightness_style}  relative   ${
                navbar ? "min-height-full" : "min-h-svh"
            }`}
        >
            <section className={`${className}`}>
                {header_name && (
                    <Header
                        name={header_name}
                        className={`pt-8 ${header_className}`}
                    />
                )}
                {children}
            </section>
        </div>
    );
};

export default AppLayoutChildren;
