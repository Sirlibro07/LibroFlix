import { createContext } from "react";
import { User } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

interface UserContextProps extends User {
    isLoggedIn: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default UserContext;
