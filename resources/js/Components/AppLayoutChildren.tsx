import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import React, { ReactNode, useContext } from "react";

interface AppLayoutChildrenProps {
    className: string;
    children: ReactNode;
    body_padding?: boolean;
}

const AppLayoutChildren = ({
    className,
    children,
    body_padding = true,
}: AppLayoutChildrenProps) => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    return (
        <>
            <section
                className={`${body_padding && "body-padding"} ${
                    isMenuVisible || isSearchbarVisible
                        ? "brightness-[30%]"
                        : ""
                } ${className}`}
            >
                {children}
            </section>
        </>
    );
};

export default AppLayoutChildren;
