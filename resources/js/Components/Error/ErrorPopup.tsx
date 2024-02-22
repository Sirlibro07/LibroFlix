import React from "react";
import Popup from "../Popup/Popup";
import getError from "../../Helpers/functions/error/getError";
import getErrorList from "../../Helpers/functions/error/getErrorList";

export type ErrorInfoType = {
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
    const error = getError(http_status_code, getErrorList());

    return (
        <Popup
            icon_name="hand"
            icon_className="ml-[-0.063rem]"
            title={error.title}
            message={error.message}
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
