import React, { ReactNode } from "react";
import SliderButton from "./SliderButton";

interface SliderProps {
    children: ReactNode;
}

const Slider = ({ children }: SliderProps) => {
    return (
        <section className="relative">
            <div className="overflow-hidden">
                <div className="w-fit grid grid-cols-2 gap-4 xs:grid-cols-3 md:flex md:items-center md:overflow-hidden">
                    {children}
                </div>
            </div>
            <SliderButton direction="left" />
            <SliderButton direction="right" />
        </section>
    );
};

export default Slider;
