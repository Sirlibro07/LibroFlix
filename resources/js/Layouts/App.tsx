import Navbar from "@/Components/Navbar";
import React from "react";

export default function App({ user, children, className = "" }) {
    return (
        <>
            <Navbar />
            <section
                className={`bg-red-400 px-mobile_side_padding h-fit ${className}`}
            >
                {children}
            </section>
            {/* <section className="bg-black w-full h-[40rem]"></section> */}
        </>
    );
}
