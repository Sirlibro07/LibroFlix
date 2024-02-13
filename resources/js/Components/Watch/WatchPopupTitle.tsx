import React from "react";

export interface WatchPopupTitleProps {
    title: string;
}

const WatchPopupTitle = ({ title }: WatchPopupTitleProps) => {
    return <h1 className="font-display text-typescale_23_px mb-2">{title}</h1>;
};

export default WatchPopupTitle;
