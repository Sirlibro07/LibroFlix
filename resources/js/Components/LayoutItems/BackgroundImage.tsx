import getBackgroundImg from "@/Shared/getBackgroundImg";
import React from "react";

interface BackgroundImageProps {
    folder_name: string;
    picture_classes?: string;
    img_classes?: string;
}

const BackgroundImage = ({
    folder_name,
    picture_classes = "",
    img_classes = "",
}: BackgroundImageProps) => {
    const img = (version: string) => {
        return getBackgroundImg(folder_name, version);
    };

    return (
        <picture className={`w-full absolute left-0 z-[-1] ${picture_classes}`}>
            <source media="(min-width: 1536px)" srcSet={img("desktop")} />
            <source media="(min-width: 1024px)" srcSet={img("laptop")} />
            <source media="(min-width: 768px)" srcSet={img("tablet")} />

            <img
                className={`w-full h-full object-cover ${img_classes}`}
                alt="background-image"
                src={img("mobile")}
                decoding="async"
            />
        </picture>
    );
};

export default BackgroundImage;
