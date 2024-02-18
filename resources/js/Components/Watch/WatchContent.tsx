import React from "react";
import WatchEmailNotVerifiedPopup from "./WatchEmailNotVerifiedPopup";
import WatchSorryPopup, { WatchSorryPopupProps } from "./WatchSorryPopup";

interface WatchContentProps extends WatchSorryPopupProps {
    has_verified_email: boolean;
}

const WatchContent = ({
    has_verified_email,
    film_title,
}: WatchContentProps) => {
    return (
        <>
            {has_verified_email ? (
                <WatchSorryPopup film_title={film_title} />
            ) : (
                <WatchEmailNotVerifiedPopup />
            )}
        </>
    );
};

export default WatchContent;
