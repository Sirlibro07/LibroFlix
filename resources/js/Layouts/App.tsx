import Navbar from "@/Components/Navbar";
import React from "react";

export default function App({ user, header, children }) {
    return (
        <>
            <Navbar />
            {/* <section className="brightness-[50%]">{children}</section> */}
            <section className="bg-black w-full h-[40rem]"></section>
        </>
    );
}
