import App from "@/Layouts/App";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import React from "react";
import OptionsList from "@/Components/OptionsList";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <App user={auth.user} className="pt-8">
            <Head title="Profile" />
            <header className="font-display text-mobile_h1 text-contrast">
                Account
            </header>

            <OptionsList
                options={[
                    { name: "Profile" },
                    { name: "Update Password" },
                    { name: "Other" },
                ]}
                ul_className="mt-8"
            />

            <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
            />

            {/* <UpdatePasswordForm />

            <DeleteUserForm /> */}
        </App>
    );
}
