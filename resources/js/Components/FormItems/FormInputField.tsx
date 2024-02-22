import React from "react";
import InputLabel from "../Input/InputLabel";
import InputError, { InputErrorProps } from "../Input/InputError";
import capitalizeFirstLetter from "@/Helpers/functions/global/capitalizeFirstLetter";
import InputWithOptionalButton, {
    InputWithOptionalButtonProps,
} from "../Input/InputWithOptionalButton";

interface FormInputFieldProps
    extends Omit<InputWithOptionalButtonProps, "icon_type">,
        InputErrorProps {
    name: string;
    icon_type?: string;
}

const FormInputField = ({
    name,
    value,
    type = "",
    state_name = "",
    setData,
    message,
    icon_name,
    icon_type = "solid",
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
            <InputWithOptionalButton
                type={type ? type : name}
                name={name}
                value={value}
                setData={setData}
                className="pl-12"
                state_name={state_name}
                icon_className="text-xl"
                icon_name={icon_name}
                icon_type={icon_type}
                button={button}
                button_title={button_title}
                button_type={button_type}
                button_onClickHandler={button_onClickHandler}
            />

            <InputError message={message} />
        </>
    );
};

export default FormInputField;
