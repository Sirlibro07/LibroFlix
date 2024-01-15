import React from "react";
import BackgroundImage from "./BackgroundImage";
import FirstMovie from "./FirstMovie";

interface MoviesIndexContentProps {
    img: (version: string) => string;
}

const MoviesIndexContent = ({ img }: MoviesIndexContentProps) => {
    return (
        <>
            <BackgroundImage
                picture_classes="w-full top-[5.625rem] h-[627px] z-[0] sm:h-[48.75rem]"
                img_function={img}
            />
            <div className="absolute left-0 w-full text-white mt-[180px]">
                <FirstMovie />
            </div>
        </>
    );
};

export default MoviesIndexContent;
