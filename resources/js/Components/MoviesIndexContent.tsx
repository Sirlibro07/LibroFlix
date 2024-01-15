import React, { useContext } from "react";
import BackgroundImage from "./BackgroundImage";
import FirstMovie from "./FirstMovie";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

interface MoviesIndexContentProps {
    img: (version: string) => string;
}

const MoviesIndexContent = ({ img }: MoviesIndexContentProps) => {
    const isMenuVisible = useContext(Menu_Searchbar_Context).isMenuVisible;
    const isSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).isSearchbarVisible;

    const conditional_style =
        (isMenuVisible || isSearchbarVisible) && "lower_brightness";

    return (
        <>
            <BackgroundImage
                picture_classes={`w-full top-[5.625rem] h-[627px] z-[0] sm:h-[48.75rem] ${conditional_style}`}
                img_function={img}
            />
            <div
                className={`absolute left-0 w-full text-white mt-[180px] ${conditional_style}`}
            >
                <FirstMovie />
            </div>
        </>
    );
};

export default MoviesIndexContent;
