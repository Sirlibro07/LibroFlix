import formSubmit from "@/Shared/formSubmit";
import React, { ReactNode } from "react";
import GeneralLink from "./GeneralLink";
import Button from "./Button";
import AuthFormName from "./AuthFormName";

interface AuthFormProps {
    children: ReactNode;
    name: string;
    method_function: (url: string) => void;
    route_name: string;
    button_title: string;
    link_route_name?: string;
    link_title?: string;
    processing: boolean;
}

export default function AuthForm({
    children,
    name,
    method_function,
    route_name,
    button_title,
    link_route_name = "",
    link_title = "",
    processing = false,
}: AuthFormProps) {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        formSubmit(e, method_function, route_name);
    };

    return (
        <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="auth_form w-full h-fit bg-black px-4 py-8 rounded-t-[1.875rem] lg:rounded-none lg:flex lg:flex-col lg:justify-center lg:px-12 lg:h-full lg:min-h-svh lg:w-[37.5rem]"
        >
            <AuthFormName name={name} />

            {children}

            <Button className="w-full mb-4 mt-8 bg_brand" disabled={processing}>
                {button_title}
            </Button>

            {link_route_name && (
                <GeneralLink
                    route_name={link_route_name}
                    className="auth_label_link w-fit mx-auto block"
                >
                    {link_title}
                </GeneralLink>
            )}
        </form>
    );
}
