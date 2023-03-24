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
    const barRef = useRef();
    const showMenu = () => {
        navRef.current.classList.toggle('responsive_menu');
        barRef.current.classList.toggle('bar_change');
    }
    return(
        <>
            <section id="navlist" className="fixed top-0 h-auto z-50 w-screen">
                <div className="nav_content flex items-center justify-between px-[20px] backdrop-blur-3xl py-8 nav w-auto z-50 sm:py-10 sm:items-center sm:px-[50px] lg:px-[100px] xl:px-[80px]">
                    <div className="logo  text-white text-sm  bg-orange-700 w-[120px] p-3 rounded-full text-center sm:text-[12px]">
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
                    <div onClick={showMenu} ref={barRef} className=" flex relative items-center my-auto lg:hidden text-3xl z-50 w-[12%] h-[20px]">
                        <span className="bar_1 absolute top-0 bg-orange-400 w-full h-[19%] rounded-full "></span>
                        <span className="bar_2 absolute bottom-0 bg-orange-400 w-[50%] right-0 h-[22%] rounded-full "></span>
                    </div>
                </div>
                <div ref={navRef} className="menu absolute top-0 bg-slate-900 z-10 py-5 w-screen h-screen">
                <nav className="flex flex-col relative items-center justify-center text-white text-xl h-screen">
                    <a href="/#"><p className="p-5 ">My Projects</p></a>
                    <a href="/#"><p className="p-5 ">My Skills</p></a>
                    <a href="/#"><p className="p-5 ">React out</p></a>
                    <a href="/#"><p className="p-5 ">My R&#xe9;sum&#xe9;</p></a>
                    <div className="flex w-6/12 text-2xl justify-between absolute bottom-[100px]">
                        <a href="#"><FaTwitter  color="orange" /></a>
                        <a href="#"><FaWhatsapp  color="orange"/></a>
                        <a href="#"><FaEnvelope  color="orange"/></a>
                    </div>
                </nav>
            </div>
            </section>
            
        </>
    )
}