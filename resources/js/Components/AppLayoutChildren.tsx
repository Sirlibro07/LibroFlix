import React, { ReactNode } from "react";

interface AppLayoutChildrenProps {
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
    className: string;
    children: ReactNode;
    body_padding?: boolean;
}

const AppLayoutChildren = ({
    isMenuVisible,
    isSearchbarVisible,
    className,
    children,
    body_padding = true,
}: AppLayoutChildrenProps) => {
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
