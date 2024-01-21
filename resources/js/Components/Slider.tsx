import React, { ReactNode } from "react";
import SliderButton from "./SliderButton";

interface SliderProps {
    children: ReactNode;
}

const Slider = ({ children }: SliderProps) => {
    return (
        <section className="relative w-full  grid grid-cols-2 gap-4  md:flex md:items-center md:overflow-hidden xs:grid-cols-3  ">
            {children}
            <SliderButton direction="right" />
            <SliderButton direction="left" />
        </section>
    );
};

export default Slider;
