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
        <main className="w-full h-[calc(100svh-5.625rem)] min-h-[25rem] pb-4 flex  justify-center items-end  md:items-center ">
            {has_verified_email ? (
                <WatchSorryPopup film_title={film_title} />
            ) : (
                <WatchEmailNotVerifiedPopup />
            )}
        </main>
    );
};

export default WatchContent;
