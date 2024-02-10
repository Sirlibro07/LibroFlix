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
                <p className="w-full flex justify-center bg-green rounded-10 p-3">
                    {message}
                </p>
            )}
        </>
    );
};

export default AuthSuccessMessage;
