import React from "react";
import PopupAppLayout from "@/Layouts/PopupAppLayout";
import Popup from "../Popup/Popup";
import BackgroundImage from "../LayoutItems/BackgroundImage";

const ResetPasswordInvalidToken = () => {
    return (
        <PopupAppLayout
            head_title={"Invalid Token"}
            bg_image={
                <BackgroundImage
                    folder_name="error"
                    picture_classes="height-full brightness-50 opacity-[.70]"
                />
            }
        >
            <Popup
                icon_name="hand"
                icon_className="ml-[-0.063rem]"
                title={"Token Invalid"}
                message={`the token could be invalid or expired time ago, please try again`}
                link_title={"Try again"}
                link_route_name={"password.request"}
            />
        </PopupAppLayout>
    );
};

export default ResetPasswordInvalidToken;
