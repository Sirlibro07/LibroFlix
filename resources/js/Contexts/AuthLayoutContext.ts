import { ReactNode, createContext } from "react";

export interface AuthLayoutContextProps {
    name: string;
    children: ReactNode;
    method_function: (url: string) => void;
    route_name: string;
    button_title: string;
    link_route_name?: string;
    link_title?: string;
    processing: boolean;
}

const AuthLayoutContext = createContext<AuthLayoutContextProps | undefined>(
    undefined
);

export default AuthLayoutContext;
