import React from "react";
import Popup from "../Popup/Popup";

type ErrorInfoType = {
    http_status_code: number;
    title: string;
    message: string;
    popup_link: boolean;
    popup_link_title?: string;
    popup_link_route_name?: string;
};

export interface ErrorPopupProps {
    http_status_code: number;
}

const ErrorPopup = ({ http_status_code }: ErrorPopupProps) => {
    const errors: ErrorInfoType[] = [
        {
            http_status_code: 403,
            title: "Where you going ?",
            message: "You're not allowed in here, go back",
            popup_link: true,
        },
        {
            http_status_code: 404,
            title: "Page not found",
            message: "Are you sure this is the right place ?",
            popup_link: true,
        },
        {
            http_status_code: 419,
            title: "Page expired",
            message: "Please refresh the page and everything will work again",
            popup_link: false,
        },
        {
            http_status_code: 429,
            title: "Too many requests",
            message: "please don't spam and try again in a few minutes, thanks",
            popup_link: true,
        },
        {
            http_status_code: 500,
            title: "Something went wrong",
            message: "please try again in a few minutes, thanks",
            popup_link: true,
        },
    ];

    const getError = () => {
        for (let i = 0; i < errors.length; i++) {
            if (http_status_code === errors[i].http_status_code) {
                return errors[i];
            }
        }
        return errors[errors.length - 1];
    };

    const error = getError();

    return (
        <Popup
            icon_name="hand"
            icon_className="ml-[-0.063rem]"
            title={error.title}
            message={error.message}
            popup_link={error.popup_link}
            link_route_name={
                error.popup_link_route_name
                    ? error.popup_link_route_name
                    : "home"
            }
            link_title={
                error.popup_link_title ? error.popup_link_title : "Go back"
            }
        />
    );
};

export default ErrorPopup;
