import React, { useContext } from "react";
import BackgroundImage from "./BackgroundImage";
import FirstMovie from "./FirstMovie";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import getBackgroundImg from "@/Helpers/getBackgroundImg";

const MoviesIndexContent = () => {
    const img = (version: string) => {
        return getBackgroundImg("first_movie", version);
    };

    const isMenuVisible = useContext(Menu_Searchbar_Context).isMenuVisible;
    const isSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).isSearchbarVisible;

    const conditional_style =
        (isMenuVisible || isSearchbarVisible) && "lower_brightness";

    return (
        <>
            <BackgroundImage
                picture_classes={`w-full top-[5.625rem] h-[39.188rem] z-[0] md:h-[48.75rem] ${conditional_style}`}
                img_function={img}
            />
            <div
                className={`absolute left-0 w-full text-white mt-[11.25rem] ${conditional_style}`}
            >
                <FirstMovie />
            </div>
        </>
    );
};

export default MoviesIndexContent;
