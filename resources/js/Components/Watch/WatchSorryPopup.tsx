import React from "react";
import WatchPopup from "./WatchPopup";

interface WatchSorryPopupProps {
    title: string;
}

const WatchSorryPopup = ({ title }: WatchSorryPopupProps) => {
    return (
        <WatchPopup
            icon_name={"film"}
            title={"I'm Sorry"}
            message={`As this is only a portfolio to demonstrate my full-stack web dev skills, I do not have the legal rights to actually stream the "${title}" film, thanks for your understanding.`}
            link_title={"Go back"}
            link_route_name={"home"}
        />
    );
};

export default WatchSorryPopup;
