import React, { ReactNode, useState } from "react";
import "@/CSS/borders.css";
import "@/CSS/navbar_visibility.css";
import "@/CSS/letter_spacing.css";
import NavbarContext from "@/Contexts/NavbarContext";
import UserContext from "@/Contexts/UserContext";
import Navbar from "@/Components/Navbar/Navbar";
import AppLayoutChildren, {
    AppLayoutChildrenProps,
} from "@/Components/LayoutItems/AppLayoutChildren";
import Footer, { FooterProps } from "@/Components/Footer/Footer";
import { Head, usePage } from "@inertiajs/react";
import { User } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

export interface AppLayoutProps extends AppLayoutChildrenProps, FooterProps {
    navbar_border?: boolean;
    bg_image?: ReactNode;
    head_title: string;
    footer?: boolean;
}

const AppLayout = ({
    children,
    className = "",
    navbar_border = true,
    bg_image = <></>,
    body_padding = true,
    footer = true,
    header_name = "",
    header_className = "",
    head_title,
    footer_border = true,
    footer_margin_top = true,
}: AppLayoutProps) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

    let user: User;
    if (usePage().props.auth) {
        user = usePage().props.auth.user;
    }
    const renderWithProviders = (children: ReactNode) => {
        return (
            <UserContext.Provider
                value={{
                    isLoggedIn: Boolean(user),
                    name: user?.name,
                    email: user?.email,
                }}
            >
                <NavbarContext.Provider
                    value={{
                        isMenuVisible: isMenuVisible,
                        setIsMenuVisible: setIsMenuVisible,
                        isSearchbarVisible: isSearchbarVisible,
                        setIsSearchbarVisible: setIsSearchbarVisible,
                    }}
                >
                    {children}
                </NavbarContext.Provider>
            </UserContext.Provider>
        );
    };

    return (
        <>
            {renderWithProviders(
                <>
                    <Navbar border={navbar_border} />
                    <Head title={head_title} />
                    {bg_image}
                    <AppLayoutChildren
                        className={className}
                        header_className={header_className}
                        header_name={header_name}
                        body_padding={body_padding}
                    >
                        {children}
                    </AppLayoutChildren>
                    {footer && (
                        <Footer
                            footer_border={footer_border}
                            footer_margin_top={footer_margin_top}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default AppLayout;
