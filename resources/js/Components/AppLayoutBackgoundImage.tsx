import React from "react";
import BackgroundImage from "./BackgroundImage";

const AppLayoutBackgoundImage = ({
    bg_image_className,
    bg_image_folder_name,
}) => {
    return (
        <div className={bg_image_className}>
            <BackgroundImage
                folder_name={bg_image_folder_name}
                picture_classes="w-full h-full"
            />
        </div>
    );
};

export default AppLayoutBackgoundImage;
