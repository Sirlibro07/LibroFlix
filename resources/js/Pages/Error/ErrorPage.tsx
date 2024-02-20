import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const ErrorPage = ({ message }) => {
    return (
        <AppLayout
            head_title="404"
            header_name={"404"}
            header_className="text-center mt-[70px] mb-[60px] lg:mt-[90px] lg:mb-[70px] lg:text-typescale_67px "
        >
            {message}
        </AppLayout>
    );
};

export default ErrorPage;
