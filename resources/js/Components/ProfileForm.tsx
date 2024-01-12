import React from "react";
import PrimaryButton from "./PrimaryButton";

const ProfileForm = ({
    children,
    method_function,
    route_name,
    processing,
    recentlySuccessful,
}) => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        method_function(route(route_name));
    };
    return (
        <form onSubmit={submitHandler}>
            {recentlySuccessful && (
                <small className="text-white block">Updated</small>
            )}
            {children}
            <PrimaryButton disabled={processing}>Update</PrimaryButton>
        </form>
    );
};

export default ProfileForm;
