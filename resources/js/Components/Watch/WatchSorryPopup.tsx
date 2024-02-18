import React from "react";
import Popup from "../Popup/Popup";

export interface WatchSorryPopupProps {
    film_title: string;
}

const WatchSorryPopup = ({ film_title }: WatchSorryPopupProps) => {
    return (
        <Popup
            icon_name={"film"}
            title={"I'm Sorry"}
            message={`As this is only a portfolio to demonstrate my full-stack web dev skills, I do not have the legal rights to actually stream the "${film_title}" film, thanks for your understanding.`}
            link_title={"Go back"}
            link_route_name={"home"}
        />
    );
};

export default WatchSorryPopup;
