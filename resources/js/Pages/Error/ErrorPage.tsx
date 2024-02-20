import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const ErrorPage = ({ http_status_code }) => {
    const getErrorMessage = () => {
        switch (http_status_code) {
            case 404:
                return "Are you sure this is the right place ?";
            case 403:
                return "Please go back, you are not allowed in here";
            case 429:
                return "Too many requests, please don't spam and try again in a few minutes";
            case 419:
                return "Page expired, please refresh the page";
            default:
                return "Something went wrong, please try again later";
        }
    };

    return (
        <AppLayout
            head_title={http_status_code}
            header_name={http_status_code}
            header_className="text-center mt-[70px] mb-[60px] lg:mt-[90px] lg:mb-[70px] lg:text-typescale_67px "
        >
            {getErrorMessage()}
        </AppLayout>
    );
};

export default ErrorPage;
