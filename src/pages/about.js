import React from "react";
import Nav from './Nav';
import Caption from "./introduction";

export default function About(){
    return(
        <>
           <section className="w-[100%] h-auto  lg:h-[fit-content] xl:h-screen relative">
                <Nav />
                <Caption />
           </section>
        </>
    )
}