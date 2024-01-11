import App from "@/Layouts/App";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <App
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
            />

            <UpdatePasswordForm className="max-w-xl" />

            <DeleteUserForm className="max-w-xl" />
        </App>
    );
}
