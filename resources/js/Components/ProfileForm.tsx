import React from "react";
import PrimaryButton from "./PrimaryButton";
import formSubmit from "@/Helpers/formSubmit";

const ProfileForm = ({
    children,
    method_function,
    route_name,
    processing,
    recentlySuccessful,
}) => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        formSubmit(e, method_function, route, route_name);
    };
    return (
        <form onSubmit={submitHandler}>
            {recentlySuccessful && (
                <div className="w-full flex justify-center bg-success rounded-10">
                    <p className="text-white py-3">Updated</p>
                </div>
            )}

            {children}
            <PrimaryButton disabled={processing}>Update</PrimaryButton>
        </form>
    );
};

export default ProfileForm;
