import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import WatchContent from "@/Components/Watch/WatchContent";
import PopupAppLayout from "@/Layouts/PopupAppLayout";
import React, { ReactNode } from "react";

const Watch = ({ has_verified_email, movie_title }) => {
    const renderWatchContent = (children: ReactNode) => {
        return (
            <PopupAppLayout
                head_title="Watch"
                bg_image={
                    <BackgroundImage
                        folder_name={"watch"}
                        picture_classes="height-full brightness-[50%] md:opacity-[.75] "
                    />
                }
            >
                {children}
            </PopupAppLayout>
        );
    };
    return (
        <>
            {renderWatchContent(
                <WatchContent
                    has_verified_email={has_verified_email}
                    movie_title={movie_title}
                />
            )}
        </>
    );
};

export default Watch;
