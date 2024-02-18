import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import WatchContent from "@/Components/Watch/WatchContent";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

const Watch = ({ has_verified_email, film_title }) => {
    const renderWatchContent = (children: ReactNode) => {
        return (
            <AppLayout
                head_title="Watch"
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
                    film_title={film_title}
                />
            )}
        </>
    );
};

export default Watch;
