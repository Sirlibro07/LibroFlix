import React from "react";

interface AuthSuccessMessageProps {
    status: string;
}

const AuthSuccessMessage = ({ status }: AuthSuccessMessageProps) => {
    return (
        <>
            {status && (
                <div className="w-full flex justify-center bg-green rounded-10">
                    <p className="text-white py-3">{status}</p>
                </div>
            )}
        </>
    );
};

export default AuthSuccessMessage;
