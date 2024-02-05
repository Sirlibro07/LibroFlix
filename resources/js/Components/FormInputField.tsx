import React from "react";
import InputLabel from "./InputLabel";
import Input from "./Input";
import InputError from "./InputError";
import capitalizeFirstLetter from "@/Helpers/capitalizeFirstLetter";
import FormInputIcon from "./FormInputIcon";

interface FormInputFieldProps {
    input_name: string;
    type?: string;
    state_name?: string;
    state_field: string;
    setData: (PrevState: object) => void;
    errors_field: string;
    icon: string;
}

const FormInputField = ({
    input_name,
    type = null,
    state_name = "",
    state_field,
    setData,
    errors_field,
    icon,
}: FormInputFieldProps) => {
    return (
        <>
            <InputLabel
                htmlFor={input_name}
                value={capitalizeFirstLetter(input_name)}
                className="mt-5"
            />
            <div className="relative flex  items-center">
                <Input
                    type={type ? type : input_name}
                    id={input_name}
                    name={input_name}
                    value={state_field}
                    setData={setData}
                    className="pl-10"
                    state_name={state_name}
                />

                <FormInputIcon icon={icon} />
            </div>

            <InputError message={errors_field} />
        </>
    );
};

export default FormInputField;
