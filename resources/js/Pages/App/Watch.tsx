import BackgroundImage from "@/Components/BackgroundImage";
import WatchContent from "@/Components/WatchContent";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

const Watch = ({ has_verified_email, title }) => {
    const renderWatchContent = (children: ReactNode) => {
        return (
            <AppLayout
                footer={false}
                navbar_border={false}
                bg_image={
                    <BackgroundImage
                        folder_name={"watch"}
                        picture_classes="h-[calc(100%-5.625rem)] brightness-[50%] md:opacity-[.75] "
                    />
                }
            >
                {children}
            </AppLayout>
        );
    };
    return (
        <>
            {renderWatchContent(
                <WatchContent
                    has_verified_email={has_verified_email}
                    title={title}
                />
            )}
        </>
    );
};

export default Watch;
