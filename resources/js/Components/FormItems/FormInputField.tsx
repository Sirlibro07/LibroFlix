import React from "react";
import InputLabel from "../Input/InputLabel";
import Input from "../Input/Input";
import InputError from "../Input/InputError";
import capitalizeFirstLetter from "@/Shared/capitalizeFirstLetter";
import FormInputIcon from "./FormInputIcon";
import InputType from "@/Shared/interfaces/InputType";

interface FormInputFieldProps extends InputType {
    name: string;
    errors_field: string;
    icon_name: string;
}

const FormInputField = ({
    name,
    value,
    type = "",
    state_name = "",
    setData,
    errors_field,
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

            <InputError message={errors_field} />
        </>
    );
};

export default FormInputField;
