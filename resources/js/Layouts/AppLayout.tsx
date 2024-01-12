import Navbar from "@/Components/Navbar";
import React from "react";
import "../Helpers/CSS/borders.css";
import "./CSS/AppLayout.css";

const AppLayout = ({ user, children, className = "" }) => {
    return (
        <>
            <Navbar />
            <section className={`yo   px-mobile_side_padding  ${className}`}>
                {children}
            </section>
        </>
    );
};

export default AppLayout;
