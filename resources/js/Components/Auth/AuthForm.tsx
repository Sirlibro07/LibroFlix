import formSubmit from "@/Helpers/functions/form/formSubmit";
import React, { useContext } from "react";
import GeneralLink from "../Global/GeneralLink";
import Button from "../Button/Button";
import Header from "../Global/Header";
import AuthLayoutContext from "@/Contexts/AuthLayoutContext";

export default function AuthForm() {
    const Context = useContext(AuthLayoutContext);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        formSubmit(e, Context.method_function, Context.route_name);
    };

    console.log(useContext(AuthLayoutContext).link_title);

    return (
        <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="auth_form w-full h-fit bg-black px-4 py-8 rounded-t-[1.875rem] lg:rounded-none lg:flex lg:flex-col lg:justify-center lg:px-12 lg:h-full lg:min-h-svh lg:w-[37.5rem]"
        >
            <Header
                name={Context.name}
                className="text-center lg:text-typescale_67px"
            />

            {Context.children}

            <Button
                className="w-full mb-4 mt-8 bg_brand"
                disabled={Context.processing}
                type="submit"
            >
                {Context.button_title}
            </Button>

            {Context.link_route_name && (
                <GeneralLink
                    route_name={Context.link_route_name}
                    className="auth_label_link w-fit mx-auto block"
                >
                    {Context.link_title}
                </GeneralLink>
            )}
        </form>
    );
}
