import React, { useContext } from "react";
import BackgroundImage from "./BackgroundImage";
import FirstMovie from "./FirstMovie";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import Slider from "./Slider";
import MovieCard from "./MovieCard";
import MoviesSlider from "./MoviesSlider";

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
                picture_classes={`w-full brightness-[85%] top-[5.625rem] h-[44rem] z-[0] md:h-[48.75rem] ${conditional_style}`}
                img_function={img}
            />
            <div
                className={`body-padding absolute left-0 w-full text-white mt-[9rem]  ${conditional_style}`}
            >
                <FirstMovie />
                <div className="mb-16 mt-16 md:mt-[120px]">
                    <p className="text-typescale_23_px font-medium mb-6 md:text-typescale_33_px">
                        Movies
                    </p>
                    <MoviesSlider
                        movies={[{ name: "Land" }, { name: "Land" }]}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviesIndexContent;
