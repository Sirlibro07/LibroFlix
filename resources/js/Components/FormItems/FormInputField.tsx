import React from "react";
import InputLabel from "../Input/InputLabel";
import Input, { InputProps } from "../Input/Input";
import InputError, { InputErrorProps } from "../Input/InputError";
import capitalizeFirstLetter from "@/Shared/capitalizeFirstLetter";
import FormInputIcon, { FormInputIconProps } from "./FormInputIcon";

interface FormInputFieldProps
    extends InputProps,
        InputErrorProps,
        FormInputIconProps {
    name: string;
}

const FormInputField = ({
    name,
    value,
    type = "",
    state_name = "",
    setData,
    message,
    icon_name,
}: FormInputFieldProps) => {
    return (
        <>
            <InputLabel
                htmlFor={name}
                value={capitalizeFirstLetter(name)}
                className="mt-6"
            />
            <div className="relative flex  items-center">
                <Input
                    type={type ? type : name}
                    name={name}
                    value={value}
                    setData={setData}
                    className="px-12"
                    state_name={state_name}
                />

                <FormInputIcon icon_name={icon_name} />
            </div>

            <InputError message={message} />
        </>
    );
};

export default FormInputField;
