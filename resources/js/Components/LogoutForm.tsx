import React from "react";
import PrimaryButton from "./PrimaryButton";
import { router } from "@inertiajs/react";

const LogoutForm = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.post(route("logout"));
    };

    return (
        <form onSubmit={submitHandler} className="max-w-[41.25rem]">
            <PrimaryButton className="bg-error_danger">Logout</PrimaryButton>
        </form>
    );
};

export default LogoutForm;
