import React from "react";

export interface PopupTitleProps {
    title: string;
}

const PopupTitle = ({ title }: PopupTitleProps) => {
    return <h1 className="font-display text-typescale_23_px mb-2">{title}</h1>;
};

export default PopupTitle;
