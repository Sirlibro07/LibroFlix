import React from "react";

export interface InputErrorProps {
    message: string;
}

export default function InputError({ message }: InputErrorProps) {
    return message ? (
        <small className="text-sm text-red block mt-1 ">{message}</small>
    ) : null;
}
