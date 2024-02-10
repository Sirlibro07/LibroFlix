import React from "react";

interface AuthSuccessMessageProps {
    recentlySuccessful: boolean;
    message: string;
}

const AuthSuccessMessage = ({
    recentlySuccessful,
    message,
}: AuthSuccessMessageProps) => {
    return (
        <>
            {recentlySuccessful && (
                <div className="w-full flex justify-center bg-green rounded-10">
                    <p className="text-white py-3">{message}</p>
                </div>
            )}
        </>
    );
};

export default AuthSuccessMessage;
