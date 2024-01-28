import React, { ReactNode } from "react";

interface AppLayoutChildrenProps {
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
    className: string;
    onClickHandler: () => void;
    children: ReactNode;
}

const AppLayoutChildren = ({
    isMenuVisible,
    isSearchbarVisible,
    className,
    onClickHandler,
    children,
}: AppLayoutChildrenProps) => {
    return (
        <section
            className={`body-padding ${
                isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : ""
            } ${className}`}
            onClick={onClickHandler}
        >
            {children}
        </section>
    );
};

export default AppLayoutChildren;
