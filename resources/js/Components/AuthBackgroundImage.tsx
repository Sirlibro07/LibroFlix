import React from "react";

interface AuthBackgroundImageProps {
    img_function: (version: string) => string;
    img_classes?: string;
}

const AuthBackgroundImage = ({
    img_function,
    img_classes = "",
}: AuthBackgroundImageProps) => {
    return (
        <picture className={`absolute left-0 z-[-1] w-full h-full`}>
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
                className={`w-full h-full object-cover object-top lg:object-bottom ${img_classes}`}
                alt="background-image"
                src={img_function("mobile")}
                decoding="async"
            />
        </picture>
    );
};

export default AuthBackgroundImage;
