import React from "react";

interface BackgroundImageProps {
    img_function: (version: string) => string;
    picture_classes?: string;
    img_classes?: string;
}

const BackgroundImage = ({
    img_function,
    picture_classes = "",
    img_classes = "",
}: BackgroundImageProps) => {
    return (
        <picture className={`absolute left-0 z-[-1] ${picture_classes}`}>
            <source
                media="(min-width: 1536px)"
                srcSet={img_function("desktop")}
            />
            <source
                media="(min-width: 1024px)"
                srcSet={img_function("laptop")}
            />
            <source
                media="(min-width: 768px)"
                srcSet={img_function("tablet")}
            />

            <img
                className={`w-full h-full object-cover ${img_classes}`}
                alt="background-image"
                src={img_function("mobile")}
                decoding="async"
            />
        </picture>
    );
};

export default BackgroundImage;
