import React, { ReactNode } from "react";
import formSubmit from "@/Helpers/formSubmit";
import Button from "./Button";

interface ProfileFormProps {
    children: ReactNode;
    button_styles?: string;
    method_function: any;
    route_name: string;
    processing?: boolean;
    recentlySuccessful?: boolean;
    button_title?: string;
    button_bg_color?: string;
}

const ProfileForm = ({
    children,
    method_function,
    route_name,
    processing = false,
    recentlySuccessful = false,
    button_title = "Update",
    button_bg_color = "bg-brand",
}: ProfileFormProps) => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        formSubmit(e, method_function, route_name);
    };
    return (
        <form onSubmit={submitHandler} className="max-w-[41.25rem]">
            {recentlySuccessful && (
                <div className="w-full flex justify-center bg-green rounded-10">
                    <p className="text-white py-3">Updated</p>
                </div>
            )}

            {children}
            <Button
                className={`w-full mt-9 mb-5 ${button_bg_color}`}
                disabled={processing}
            >
                {button_title}
            </Button>
        </form>
    );
};

export default ProfileForm;
