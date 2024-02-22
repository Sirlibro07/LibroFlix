import { createContext } from "react";

interface NavbarContextProps {
    isMenuVisible: boolean;
    setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isSearchbarVisible: boolean;
    setIsSearchbarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export default NavbarContext;
