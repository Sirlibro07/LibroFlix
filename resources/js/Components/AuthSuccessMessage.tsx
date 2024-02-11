import React from "react";

interface AuthSuccessMessageProps {
    status: string;
}

const AuthSuccessMessage = ({ status }: AuthSuccessMessageProps) => {
    return (
        <>
            {status && (
                <p className="w-full flex justify-center bg-green rounded-10 p-3">
                    {status}
                </p>
            )}
        </>
    );
};

export default AuthSuccessMessage;
