import { ErrorInfoType } from "@/Pages/Error/ErrorPage";

const getError = (http_status_code: number, errors: ErrorInfoType[]) => {
    const error_found = errors.find(
        (error) => error.http_status_code === http_status_code
    );
    return error_found ? error_found : errors[errors.length - 1];
};

export default getError;
