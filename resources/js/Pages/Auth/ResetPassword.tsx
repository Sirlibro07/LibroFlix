import React from "react";
import ResetPasswordInvalidToken from "@/Components/ResetPassword/ResetPasswordInvalidToken";
import ResetPasswordContent, {
    ResetPasswordContentProps,
} from "@/Components/ResetPassword/ResetPasswordContent";

interface ResetPasswordProps extends ResetPasswordContentProps {
    is_token_valid: boolean;
}

const ResetPassword = ({
    email,
    token,
    is_token_valid,
}: ResetPasswordProps) => {
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
