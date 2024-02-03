import React from "react";
import { router } from "@inertiajs/react";
import Button from "./Button";

const LogoutForm = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.post(route("logout"));
    };

    return (
        <form onSubmit={submitHandler} className="max-w-[41.25rem]">
            <Button className="bg-error_danger w-full">Logout</Button>
        </form>
    );
};

export default LogoutForm;
