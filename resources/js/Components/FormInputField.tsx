import React from "react";
import InputLabel from "./InputLabel";
import Input from "./Input";
import InputError from "./InputError";
import capitalizeFirstLetter from "@/Shared/capitalizeFirstLetter";
import FormInputIcon from "./FormInputIcon";
import InputType from "@/Shared/interfaces/InputType";

interface FormInputFieldProps extends InputType {
    name: string;
    errors_field: string;
    icon: string;
}

const FormInputField = ({
    name,
    value,
    type = "",
    state_name = "",
    setData,
    errors_field,
    icon,
}: FormInputFieldProps) => {
    return (
        <div className="mb-6">
            <InputLabel
                htmlFor={name}
                value={capitalizeFirstLetter(name)}
                className=""
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

                <FormInputIcon icon={icon} />
            </div>

            <InputError message={errors_field} />
        </div>
    );
};

export default FormInputField;
