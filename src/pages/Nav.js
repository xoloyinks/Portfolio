import React from "react";
import { useRef } from "react";
import {FaBars, FaEnvelope, FaTwitter, FaWhatsapp, FaTimes} from 'react-icons/fa'


export default function Nav(){
    const navRef = useRef();
    const showMenu = () => {
        navRef.current.classList.toggle('responsive_menu');
    }
    return(
        <>
            <section className="fixed h-auto z-50 w-screen">
                <div className="flex justify-between px-[20px] backdrop-blur-3xl py-5 nav w-auto z-40 sm:py-4 sm:items-center sm:px-[50px] lg:px-[100px] xl:px-[130px]">
                    <div className="logo  text-gray-300 text-md  bg-gray-700 w-[120px] p-3 rounded-full text-center sm:text-[12px]">
                        MyPortfolio
                    </div>
                    <div className="hidden lg:flex justify-between w-4/12 text-white  tracking-widest text-sm">
                        <span><a href="#project">Projects</a></span>
                        <span><a href="#skill">Skills</a></span>
                        <span><a href="#contact">Contact</a></span>
                        <span><a href="#about">About</a></span>
                    </div>
                    <div className="hidden justify-between text-lg w-[100px] z-10 lg:flex ">
                        <a href="#"><FaTwitter  color="white"/></a>
                        <a href="#"><FaWhatsapp  color="white"/></a>
                        <a href="#"><FaEnvelope  color="white"/></a>
                    </div>
                    <div className="my-auto lg:hidden text-3xl">
                        <button onClick={showMenu}>
                            <FaBars color="white" id="menu" />
                        </button>
                    </div>
                </div>
                <div ref={navRef} className="menu absolute top-0 bg-gray-800 z-50 py-5 w-screen h-screen">
                    <nav className="flex flex-col relative items-center justify-center text-white text-3xl h-screen">
                        <a href="/#"><p className="p-5 ">Projects</p></a>
                        <a href="/#"><p className="p-5 ">Skills</p></a>
                        <a href="/#"><p className="p-5 ">Contact</p></a>
                        <a href="/#"><p className="p-5 ">About</p></a>
                        
                        <button onClick={showMenu} className="absolute right-0 top-0 text-4xl z-50 p-3">
                            <FaTimes color="white" />
                        </button>
                    </nav>
                    
                </div>
            </section>
        </>
    )
}