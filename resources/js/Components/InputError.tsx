import React from "react";

interface InputErrorProps {
    message: string;
}

export default function InputError({ message }: InputErrorProps) {
    return message ? (
        <small className="text-sm text-error_danger block ">{message}</small>
    ) : null;
}
