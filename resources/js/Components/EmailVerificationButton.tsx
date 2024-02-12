import React from "react";
import Button from "./Button";
import { router } from "@inertiajs/react";

interface EmailVerificationButton {
    has_verified_email: boolean;
}

const EmailVerificationButton = ({
    has_verified_email,
}: EmailVerificationButton) => {
    const buttonOnClickhandler = () => {
        router.post(route("verification.send"));
    };
    return (
        <>
            {!has_verified_email && (
                <Button
                    type="button"
                    onClick={buttonOnClickhandler}
                    className="bg_brand w-[70px] transitions hover:w-[90px] absolute right-0 mt-[-52px]"
                >
                    Verify
                </Button>
            )}
        </>
    );
};

export default EmailVerificationButton;
