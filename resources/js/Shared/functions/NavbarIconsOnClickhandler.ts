const NavbarIconsOnClickhandler = (
    func: (value: React.SetStateAction<boolean>) => void,
    func2: (value: React.SetStateAction<boolean>) => void
) => {
    func((isItVisible: boolean) => !isItVisible);
    func2(false);
};

export default NavbarIconsOnClickhandler;
