import React from "react";
import SliderTitle, { SliderTitleProps } from "./SliderTitle";
import "swiper/css";
import "swiper/css/pagination";
import SliderContent, { SliderContentProps } from "./SliderContent";

interface SliderProps extends SliderTitleProps, SliderContentProps {}

const Slider = ({
    movies,
    slider_title,
    slider_title_className = "",
}: SliderProps) => {
    return (
        <>
            <SliderTitle
                slider_title={slider_title}
                slider_title_className={slider_title_className}
            />
            <SliderContent movies={movies} />
        </>
    );
};

export default Slider;
