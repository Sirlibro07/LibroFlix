import { createContext } from "react";

interface UserContextType {
    isLoggedIn: boolean;
    name: string;
    email: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
