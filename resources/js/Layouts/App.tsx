import Navbar from "@/Components/Navbar";
import React from "react";
import "../Helpers/CSS/borders.css";

export default function App({ user, children, className = "" }) {
    return (
        <>
            <Navbar />
            <section
                className={`yo bg-black  px-mobile_side_padding h-[500px] ${className}`}
            >
                {children}
            </section>
        </>
    );
}
