import { createContext } from "react";

interface UserContextType {
    name: string;
    email: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
