import React from "react";
import { router } from "@inertiajs/react";
import Button from "../Button/Button";

const LogoutForm = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.post(route("logout.store"));
    };

    return (
        <form onSubmit={submitHandler} className="max-w-[41.25rem]">
            <Button className="bg-red w-full" type="submit">
                Logout
            </Button>
        </form>
    );
};

export default LogoutForm;
