import ErrorPopup, { ErrorPopupProps } from "@/Components/Error/ErrorPopup";
import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import PopupAppLayout from "@/Layouts/PopupAppLayout";
import React from "react";

interface ErrorPageProps extends ErrorPopupProps {}

const ErrorPage = ({ http_status_code }: ErrorPageProps) => {
    return (
        <PopupAppLayout
            head_title={String(http_status_code)}
            bg_image={
                <BackgroundImage
                    folder_name="error"
                    picture_classes="error_page_picture_styles"
                />
            }
        >
            <ErrorPopup http_status_code={http_status_code} />
        </PopupAppLayout>
    );
};

export default ErrorPage;
