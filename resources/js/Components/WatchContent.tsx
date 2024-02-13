import React from "react";
import WatchEmailNotVerifiedPopup from "./WatchEmailNotVerifiedPopup";
import WatchSorryPopup from "./WatchSorryPopup";

interface WatchContentProps {
    has_verified_email: boolean;
    title: string;
}

const WatchContent = ({ has_verified_email, title }: WatchContentProps) => {
    return (
        <main className="w-full h-[calc(100svh-5.625rem)] min-h-[25rem] pb-4 flex  justify-center items-end  md:items-center ">
            {has_verified_email ? (
                <WatchSorryPopup title={title} />
            ) : (
                <WatchEmailNotVerifiedPopup />
            )}
        </main>
    );
};

export default WatchContent;
