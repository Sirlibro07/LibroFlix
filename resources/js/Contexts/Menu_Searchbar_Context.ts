import { createContext } from "react";

interface Menu_Searchbar_ContextType {
    isMenuVisible: boolean;
    setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isSearchbarVisible: boolean;
    setIsSearchbarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu_Searchbar_Context = createContext<
    Menu_Searchbar_ContextType | undefined
>(undefined);

export default Menu_Searchbar_Context;
