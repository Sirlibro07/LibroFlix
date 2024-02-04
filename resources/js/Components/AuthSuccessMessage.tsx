import React from "react";

interface AuthSuccessMessageProps {
    status: string;
}

const AuthSuccessMessage = ({ status }: AuthSuccessMessageProps) => {
    return (
        <>
            {status && (
                <small className="text-sm text-green block">{status}</small>
            )}
        </>
    );
};

export default AuthSuccessMessage;
