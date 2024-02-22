import { ErrorInfoType } from "./ErrorPopup";

const getErrorList = (): ErrorInfoType[] => {
    return [
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
};

export default getErrorList;
