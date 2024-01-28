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
        <>
            <section
                className={`body-padding ${
                    isMenuVisible || isSearchbarVisible
                        ? "brightness-[30%]"
                        : ""
                } ${className}`}
            >
                {children}
            </section>
            <div
                onClick={onClickHandler}
                className={`w-full h-[calc(100%-5.625rem)] absolute top-[5.625rem] left-0 ${
                    isMenuVisible || isSearchbarVisible ? "block" : "hidden"
                }`}
            ></div>
        </>
    );
};

export default AppLayoutChildren;
