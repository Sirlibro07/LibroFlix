import React, { ReactNode, useContext } from "react";
import Header from "../Global/Header";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

export interface AppLayoutChildrenProps {
    className?: string;
    children: ReactNode;
    header_name?: string;
    header_className?: string;
    body_padding?: boolean;
}

const AppLayoutChildren = ({
    className = "",
    children,
    header_name = "",
    header_className = "",
    body_padding = true,
}: AppLayoutChildrenProps) => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const body_padding_style = body_padding ? "body-padding" : "";
    const low_brightness_style =
        isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : "";

    return (
        <div
            className={`${body_padding_style} ${low_brightness_style} relative full-height`}
        >
            <section className={`${className}`}>
                {header_name && (
                    <Header name={header_name} className={header_className} />
                )}
                {children}
            </section>
        </div>
    );
};

export default AppLayoutChildren;
