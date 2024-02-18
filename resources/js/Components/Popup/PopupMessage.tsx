import React from "react";

export interface PopupMessageProps {
    message: string;
}

const PopupMessage = ({ message }: PopupMessageProps) => {
    return <p className="text-light_grey mb-4">{message}</p>;
};

export default PopupMessage;
