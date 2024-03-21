import React, { ReactNode } from "react";
import Heading from "./Heading";
import useBrightness from "@/Hooks/useBrightness";

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
    const body_padding_style = body_padding ? "body-padding" : "";
    const brightness_style = useBrightness();

    return (
        <div
            className={`${body_padding_style} ${brightness_style} relative min-height-full`}
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
