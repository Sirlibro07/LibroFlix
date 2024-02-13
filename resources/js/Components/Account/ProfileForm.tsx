import React, { ReactNode } from "react";
import formSubmit from "@/Shared/functions/formSubmit";
import Button from "../Button/Button";
import AuthSuccessMessage, {
    AuthSuccessMessageProps,
} from "../Auth/AuthSuccessMessage";

interface ProfileFormProps extends AuthSuccessMessageProps {
    children: ReactNode;
    method_function: any;
    route_name: string;
    processing?: boolean;
    button_title?: string;
    button_bg_color?: string;
}

const ProfileForm = ({
    children,
    method_function,
    route_name,
    processing = false,
    status = "",
    button_title = "Update",
    button_bg_color = "bg_brand",
}: ProfileFormProps) => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        formSubmit(e, method_function, route_name);
    };
    return (
        <form onSubmit={submitHandler} className="max-w-[41.25rem] relative">
            <AuthSuccessMessage status={status} />

            {children}
            <Button
                className={`w-full mt-9 mb-5 ${button_bg_color}`}
                disabled={processing}
                type="submit"
            >
                {button_title}
            </Button>
        </form>
    );
};

export default ProfileForm;
