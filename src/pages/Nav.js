import React from "react";
import { useRef } from "react";
import {FaBars, FaEnvelope, FaTwitter, FaWhatsapp, FaTimes} from 'react-icons/fa'

window.onscroll = function(){
    scroll();
};

function scroll(){
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        document.getElementById('navlist').style.top = "-200px";
     }else{
        document.getElementById('navlist').style.top = '0';
     }
}
export default function Nav(){
    const navRef = useRef();
    const showMenu = () => {
        navRef.current.classList.toggle('responsive_menu');
    }
    return(
        <>
            <section id="navlist" className="fixed top-0 h-auto z-50 w-screen">
                <div className="flex items-center justify-between px-[20px] backdrop-blur-3xl py-8 nav w-auto z-40 sm:py-10 sm:items-center sm:px-[50px] lg:px-[100px] xl:px-[80px]">
                    <div className="logo  text-white text-md  bg-orange-700 w-[120px] p-3 rounded-full text-center sm:text-[12px]">
                        MyPortfolio
                    </div>
                    <div className="hidden lg:flex lg:items-center justify-between w-6/12 text-orange-400  tracking-widest text-sm">
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#project" className= "nav-opt px-[10px] py-2 ">Projects</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#skill" className=" nav-opt px-[10px] py-2">Skills</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#contact" className=" nav-opt px-[10px] py-2">Contact</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#about" className=" nav-opt px-[10px] py-2">About</a></span>
                        <div className="btn font-bold relative px-[32px] py-[8px] rounded-lg border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white ">R&#xe9;sum&#xe9;</div>
                    </div>
                    {/* <div className="hidden justify-between text-lg w-[100px] z-10 lg:flex ">
                        <a href="#"><FaTwitter  color="white"/></a>
                        <a href="#"><FaWhatsapp  color="white"/></a>
                        <a href="#"><FaEnvelope  color="white"/></a>
                    </div> */}
                    <div className="my-auto lg:hidden text-3xl">
                        <button onClick={showMenu}>
                            <FaBars color="#ea580c" id="menu" />
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