import { AuthFormProps } from "@/Components/Auth/AuthForm";
import { createContext } from "react";

export interface AuthLayoutContextProps extends AuthFormProps {}

const AuthLayoutContext = createContext<AuthLayoutContextProps | undefined>(
    undefined
);

export default AuthLayoutContext;
