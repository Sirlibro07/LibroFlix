import React from "react";
import PopupLayout from "@/Layouts/PopupLayout";

const ResetPasswordInvalidToken = () => {
    return (
        <PopupLayout
            head_title="Reset Password"
            icon_name="hand"
            icon_className="ml-[-0.063rem]"
            title={"Token Invalid"}
            message={`the token could be invalid or expired time ago, please try again`}
            link_title={"Try again"}
            link_route_name={"password.request"}
        />
    );
};

export default ResetPasswordInvalidToken;
