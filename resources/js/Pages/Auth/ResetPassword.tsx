import React from "react";
import ResetPasswordInvalidToken from "@/Components/ResetPassword/ResetPasswordInvalidToken";
import ResetPasswordContent from "@/Components/ResetPassword/ResetPasswordContent";

const ResetPassword = ({ email, token, is_token_valid }) => {
    return (
        <>
            {is_token_valid ? (
                <ResetPasswordContent token={token} email={email} />
            ) : (
                <ResetPasswordInvalidToken />
            )}
        </>
    );
};

export default ResetPassword;
