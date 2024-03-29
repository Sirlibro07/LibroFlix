import React from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";

interface FormCheckboxFieldProps
    extends Omit<CheckboxProps, "className" | "checked"> {
    label: string;
    state_field: string | boolean;
}

const FormCheckboxField = ({
    name,
    label,
    state_field,
    setData,
}: FormCheckboxFieldProps) => {
    return (
        <div className="flex items-center">
            <Checkbox name={name} checked={state_field} setData={setData} />
            <span className="text-sm font-medium ml-1 sm:ml-2 lg:text-[0.938rem]">
                {label}
            </span>
        </div>
    );
};

export default FormCheckboxField;
