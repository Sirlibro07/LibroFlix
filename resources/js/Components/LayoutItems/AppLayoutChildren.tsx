import React, { ReactNode, useContext } from "react";
import Heading from "../Global/Heading";
import NavbarContext from "@/Contexts/NavbarContext";

export interface AppLayoutChildrenProps {
    className?: string;
    children: ReactNode;
    Heading_name?: string;
    Heading_className?: string;
    body_padding?: boolean;
}

const AppLayoutChildren = ({
    className = "",
    children,
    Heading_name = "",
    Heading_className = "",
    body_padding = true,
}: AppLayoutChildrenProps) => {
    const Context = useContext(NavbarContext);
    const { isMenuVisible } = Context;
    const { isSearchbarVisible } = Context;

    const body_padding_style = body_padding ? "body-padding" : "";
    const low_brightness_style =
        isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : "";

    return (
        <div
            className={`${body_padding_style} ${low_brightness_style} relative min-height-full`}
        >
            <section className={`${className}`}>
                {Heading_name && (
                    <Heading
                        name={Heading_name}
                        className={`pt-8 ${Heading_className}`}
                    />
                )}
                {children}
            </section>
        </div>
    );
};

export default AppLayoutChildren;
