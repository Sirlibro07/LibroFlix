import { ErrorInfoType } from "@/Pages/Error/ErrorPage";

const getError = (http_status_code: number, errors: ErrorInfoType[]) => {
    for (let i = 0; i < errors.length; i++) {
        if (http_status_code === errors[i].http_status_code) {
            return errors[i];
        }
    }
    return errors[errors.length - 1];
};

export default getError;
