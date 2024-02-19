import React from "react";
import ResetPasswordInvalidToken from "@/Components/ResetPassword/ResetPasswordInvalidToken";
import ResetPasswordContent from "@/Components/ResetPassword/ResetPasswordContent";

const ResetPassword = ({ email, token, isTokenValid }) => {
    return (
        <>
            {isTokenValid ? (
                <ResetPasswordContent token={token} email={email} />
            ) : (
                <ResetPasswordInvalidToken />
            )}
        </>
    );
};

export default ResetPassword;
