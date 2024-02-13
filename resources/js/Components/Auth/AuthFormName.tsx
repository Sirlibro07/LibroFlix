import React from "react";

export interface AuthFormNameProps {
    name: string;
}

const AuthFormName = ({ name }: AuthFormNameProps) => {
    return (
        <h1 className="font-display text-typescale_38px text-center lg:text-typescale_67px ">
            {name}
        </h1>
    );
};

export default AuthFormName;
