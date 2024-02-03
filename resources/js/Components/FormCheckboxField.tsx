import React from "react";
import Checkbox from "./Checkbox";

interface FormCheckboxFieldProps {
    name: string;
    label: string;
    state_field: string | boolean;
    setData: (PrevState: object) => void;
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
            <span className="text-sm font-medium ml-1 sm:ml-2">{label}</span>
        </div>
    );
};

export default FormCheckboxField;
