import React from "react";

const SliderTitle = ({ title, slider_title_className }) => {
    return (
        <p
            className={`text-typescale_23_px font-medium mb-6 md:text-typescale_33_px ${slider_title_className}`}
        >
            {title}
        </p>
    );
};

export default SliderTitle;
