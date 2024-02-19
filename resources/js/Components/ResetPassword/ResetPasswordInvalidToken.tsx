import React from "react";
import PopupAppLayout from "@/Layouts/PopupAppLayout";
import Popup from "../Popup/Popup";

const ResetPasswordInvalidToken = () => {
    return (
        <PopupAppLayout head_title={"Invalid Token"}>
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
