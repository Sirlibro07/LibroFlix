import React, { ReactNode } from "react";
import submit from "@/Helpers/submit";

interface AuthFormProps {
    children: ReactNode;
    name: string;
    route: (url: string) => string;
    post: (url: string) => void;
    endpoint: string;
}

export default function AuthForm({
    children,
    name,
    route,
    post,
    endpoint,
}: AuthFormProps) {
    return (
        <form
            onSubmit={(e) => {
                submit(e, post, route, endpoint);
            }}
            className="w-full h-fit bg-body px-mobile_side_padding py-mobile_auth_y_padding rounded-t-auth_big_radius lg:w-6/12 lg:max-w-pc_auth_max_width lg:rounded-auth_big_radius lg:h-[calc(100%-3.75rem)] lg:min-h-[600px] lg:mx-pc_auth_x_margin  lg:flex lg:flex-col lg:justify-center lg:py-0 xl:px-desktop_auth_x_padding"
        >
            <h1 className="font-display text-mobile_h1 text-white text-center lg:text-desktop_h1 ">
                {name}
            </h1>
            {children}
        </form>
    );
}
