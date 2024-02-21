import React from "react";
import AppLayout, { AppLayoutProps } from "./AppLayout";

interface PopupAppLayoutProps
    extends Pick<AppLayoutProps, "head_title" | "bg_image" | "children"> {}

const PopupAppLayout = ({
    children,
    head_title,
    bg_image = <></>,
}: PopupAppLayoutProps) => {
    return (
        <AppLayout
            head_title={head_title}
            bg_image={bg_image}
            footer={false}
            navbar_border={false}
        >
            <main className="w-full min-height-full pt-[8.125rem]  pb-4 flex justify-center items-end  md:items-center lg:min-h-[calc(100svh-5.625rem-8.125rem)] ">
                {children}
            </main>
        </AppLayout>
    );
};

export default PopupAppLayout;
