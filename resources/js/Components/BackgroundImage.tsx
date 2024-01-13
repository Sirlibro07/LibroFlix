import React from "react";

const BackgroundImage = ({ img_function, img_classes }) => {
    return (
        <picture className="w-full h-full absolute z-[-1]">
            <source
                media="(min-width: 1536px)"
                srcSet={img_function("desktop")}
            />
            <source
                media="(min-width: 1024px)"
                srcSet={img_function("laptop")}
            />
            <source
                media="(min-width: 640px)"
                srcSet={img_function("tablet")}
            />

            <img
                className={img_classes}
                alt="background-image"
                src={img_function("mobile")}
                decoding="async"
            />
        </picture>
    );
};

export default BackgroundImage;
