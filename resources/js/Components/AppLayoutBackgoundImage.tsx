import React from "react";
import BackgroundImage from "./BackgroundImage";

const AppLayoutBackgoundImage = () => {
    return (
        <div className="w-full absolute top-[5.625rem] bottom-0 z-[-1]">
            <BackgroundImage
                folder_name="first_movie"
                picture_classes="h-[44rem]  md:h-[48.75rem]"
            />
        </div>
    );
};

export default AppLayoutBackgoundImage;
