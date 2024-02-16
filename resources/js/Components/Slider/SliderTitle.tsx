import React from "react";

export interface SliderTitleProps {
    slider_title: string;
    slider_title_className?: string;
}

const SliderTitle = ({
    slider_title,
    slider_title_className = "",
}: SliderTitleProps) => {
    return (
        <p
            className={`text-typescale_23_px font-medium mb-6 md:text-typescale_33_px ${slider_title_className}`}
        >
            {slider_title}
        </p>
    );
};

export default SliderTitle;
