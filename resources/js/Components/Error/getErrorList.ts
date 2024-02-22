import { ErrorInfoType } from "@/Pages/Error/ErrorPage";

const getErrorList = (): ErrorInfoType[] => {
    return [
        {
            http_status_code: 403,
            title: "Where you going ?",
            message: "You're not allowed in here, go back",
        },
        {
            http_status_code: 404,
            title: "Page not found",
            message: "Are you sure this is the right place ?",
        },
        {
            http_status_code: 419,
            title: "Page expired",
            message: "Please refresh the page and everything will work again",
        },
        {
            http_status_code: 429,
            title: "Too many requests",
            message: "please don't spam and try again in a few minutes, thanks",
        },
        {
            http_status_code: 500,
            title: "Something went wrong",
            message: "please try again in a few minutes, thanks",
        },
    ];
};

export default getErrorList;
