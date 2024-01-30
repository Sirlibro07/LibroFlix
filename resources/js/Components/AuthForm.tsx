import formSubmit from "@/Helpers/formSubmit";
import React, { ReactNode } from "react";

interface AuthFormProps {
    children: ReactNode;
    name: string;
    method_function: (url: string) => void;
    route_name: string;
}

export default function AuthForm({
    children,
    name,
    method_function,
    route_name,
}: AuthFormProps) {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        formSubmit(e, method_function, route, route_name);
    };

    return (
        <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="w-full h-fit bg-body px-mobile_side_padding py-mobile_auth_y_padding rounded-t-auth_big_radius lg:w-[45%] lg:max-w-pc_auth_max_width lg:min-h-[600px]  lg:rounded-none lg:h-full  lg:flex lg:flex-col lg:justify-center lg:px-10"
        >
            <h1 className="font-display text-mobile_h1 text-contrast text-center lg:text-desktop_h1 ">
                {name}
            </h1>
            {children}
        </form>
    );
}
