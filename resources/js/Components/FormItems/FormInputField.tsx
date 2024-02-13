import React from "react";
import InputLabel from "../Input/InputLabel";
import InputError, { InputErrorProps } from "../Input/InputError";
import capitalizeFirstLetter from "@/Shared/functions/capitalizeFirstLetter";
import FormInputIcon, { FormInputIconProps } from "./FormInputIcon";
import InputWithButton, {
    InputWithButtonProps,
} from "../Input/InputWithButton";

interface FormInputFieldProps
    extends InputWithButtonProps,
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
    button = false,
    button_title = "",
    button_type = "button",
    button_onClickHandler = null,
}: FormInputFieldProps) => {
    return (
        <>
            <InputLabel
                htmlFor={name}
                value={capitalizeFirstLetter(name)}
                className="mt-6"
            />
            <div className="relative flex  items-center">
                <InputWithButton
                    type={type ? type : name}
                    name={name}
                    value={value}
                    setData={setData}
                    className="pl-12 pr-4"
                    state_name={state_name}
                    button={button}
                    button_title={button_title}
                    button_type={button_type}
                    button_onClickHandler={button_onClickHandler}
                />

                <FormInputIcon icon_name={icon_name} />
            </div>

            <InputError message={message} />
        </>
    );
};

export default FormInputField;
