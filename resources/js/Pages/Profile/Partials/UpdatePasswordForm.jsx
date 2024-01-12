import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import ProfileForm from "@/Components/ProfileForm";
import FormInputField from "@/Components/FormInputField";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <ProfileForm
            method_function={put}
            route_name="password.update"
            processing={processing}
            recentlySuccessful={recentlySuccessful}
        >
            <FormInputField
                name={"Current Password"}
                type="password"
                state_field={data.current_password}
                errors_field={errors.current_password}
                icon="lock"
                setData={setData}
                state_to_change={"current_password"}
            />
            <FormInputField
                name={"password"}
                state_field={data.password}
                errors_field={errors.password}
                icon="lock"
                setData={setData}
            />
            <FormInputField
                name={"Password Confirmation"}
                type="password"
                state_field={data.password_confirmation}
                errors_field={errors.password_confirmation}
                icon="lock"
                setData={setData}
                state_to_change={"password_confirmation"}
            />
        </ProfileForm>
    );
}
