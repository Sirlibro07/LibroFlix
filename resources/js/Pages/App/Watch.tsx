import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import WatchContent, {
    WatchContentProps,
} from "@/Components/Watch/WatchContent";
import PopupAppLayout from "@/Layouts/PopupAppLayout";
import React, { ReactNode } from "react";

interface WatchProps extends WatchContentProps {}

const Watch = ({ has_verified_email, movie_title }: WatchProps) => {
    const renderWatchContent = (children: ReactNode) => {
        return (
            <PopupAppLayout
                head_title="Watch"
                bg_image={
                    <BackgroundImage
                        folder_name="error"
                        picture_classes="error_page_picture_styles"
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
