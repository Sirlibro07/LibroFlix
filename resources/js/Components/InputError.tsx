import React from "react";

interface InputErrorProps {
    message: string;
}

export default function InputError({ message }: InputErrorProps) {
    return message ? (
        <small className="text-sm text-red block ">{message}</small>
    ) : null;
}
