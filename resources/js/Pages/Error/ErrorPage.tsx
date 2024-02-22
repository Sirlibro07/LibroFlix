import React from "react";
import PopupLayout from "@/Layouts/PopupLayout";
import getError from "@/Helpers/functions/error/getError";
import getErrorList from "@/Helpers/functions/error/getErrorList";

interface ErrorPageProps {
    http_status_code: number;
}

export type ErrorInfoType = {
    http_status_code: number;
    title: string;
    message: string;
    popup_link_title?: string;
    popup_link_route_name?: string;
};

const ErrorPage = ({ http_status_code }: ErrorPageProps) => {
    const error = getError(http_status_code, getErrorList());
    return (
        <PopupLayout
            head_title={String(http_status_code)}
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

export default ErrorPage;
