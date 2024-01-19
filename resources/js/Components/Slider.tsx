import React, { ReactNode } from "react";

interface SliderProps {
    children: ReactNode;
}

const Slider = ({ children }: SliderProps) => {
    return (
        <section className="w-full  grid grid-cols-2 gap-4  md:flex md:overflow-hidden xs:grid-cols-3  ">
            {children}
        </section>
    );
};

export default Slider;
