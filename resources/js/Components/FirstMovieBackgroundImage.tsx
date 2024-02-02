import React from "react";
import BackgroundImage from "./BackgroundImage";

const FirstMovieBackgroundImage = () => {
    return (
        <div className="w-full h-[44rem] md:h-[48.75rem] absolute top-[5.625rem] bottom-0 z-[-1]">
            <BackgroundImage
                folder_name="first_movie"
                picture_classes="w-full h-full"
            />
        </div>
    );
};

export default FirstMovieBackgroundImage;
