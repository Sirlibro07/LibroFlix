import React from "react";

export interface WatchPopupMessageProps {
    message: string;
}

const WatchPopupMessage = ({ message }: WatchPopupMessageProps) => {
    return <p className="text-light_grey mb-4">{message}</p>;
};

export default WatchPopupMessage;
