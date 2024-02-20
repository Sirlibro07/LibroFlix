import React from "react";
import WatchEmailNotVerifiedPopup from "./WatchEmailNotVerifiedPopup";
import WatchSorryPopup, { WatchSorryPopupProps } from "./WatchSorryPopup";

interface WatchContentProps extends WatchSorryPopupProps {
    has_verified_email: boolean;
}

const WatchContent = ({
    has_verified_email,
    movie_title,
}: WatchContentProps) => {
    return (
        <>
            {has_verified_email ? (
                <WatchSorryPopup movie_title={movie_title} />
            ) : (
                <WatchEmailNotVerifiedPopup />
            )}
        </>
    );
};

export default WatchContent;
