import React from "react";
import InputLabel from "./InputLabel";
import Input from "./Input";
import InputError from "./InputError";
import capitalizeFirstLetter from "@/Helpers/capitalizeFirstLetter";
import Icon from "./Icon";
import FormInputIcon from "./FormInputIcon";

interface FormInputFieldProps {
    name: string;
    type?: string;
    state_name?: string;
    state_field: string;
    setData: (PrevState: object) => void;
    errors_field: string;
    icon: string;
    state_to_change?: string;
}

const FormInputField = ({
    name,
    type = null,
    state_name = null,
    state_field,
    setData,
    errors_field,
    icon,
    state_to_change = "",
}: FormInputFieldProps) => {
    return (
        <>
            <InputLabel
                htmlFor={name}
                value={capitalizeFirstLetter(name)}
                className="mt-5"
            />
            <div className="relative flex  items-center">
                <Input
                    type={type ? type : name}
                    id={name}
                    name={state_name ? state_name : name}
                    value={state_field}
                    setData={setData}
                    className="pl-10"
                    state_to_change={state_to_change}
                />

                <FormInputIcon icon={icon} />
            </div>

            <InputError message={errors_field} />
        </>
    );
};

export default FormInputField;
