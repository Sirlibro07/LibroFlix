import React from "react";

interface AuthSuccessMessageProps {
    status: string;
}

const AuthSuccessMessage = ({ status }: AuthSuccessMessageProps) => {
    return (
        <>
            {status && (
                <small className="text-sm text-success block">{status}</small>
            )}
        </>
    );
};

export default AuthSuccessMessage;
