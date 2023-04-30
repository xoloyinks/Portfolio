import React from "react";
import { useRef } from "react";
import {FaBars, FaEnvelope, FaTwitter, FaWhatsapp, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs';

window.onscroll = function(){
    scroll();
};

const priColor = "green-800";

function scroll(){
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1000){
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
                <div className="nav_content flex items-center justify-between px-[15px] backdrop-blur-3xl py-8 nav w-auto z-50 sm:py-10 max-[380px]:py-[20px] sm:items-center sm:px-[50px] lg:px-[100px] xl:px-[80px] min-[1024px]:px-[60px]">
                    <div className={`logo text-white font-bold w-[120px] p-3 rounded-full text-center sm:text-[12px]`}>
                        XOLO.
                    </div>
                    
                    <div className="hidden lg:flex lg:items-center justify-between w-6/12 text-black text-white  tracking-widest text-sm">
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#project" className= "nav-opt px-[10px] py-2 ">Projects</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#skill" className=" nav-opt px-[10px] py-2">Skills</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#contact" className=" nav-opt px-[10px] py-2">Contact</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#about" className=" nav-opt px-[10px] py-2">About</a></span>
                        <a href="/resume/kolawole.pdf" download className="btn font-bold relative px-[32px] py-[8px] rounded-lg border-2 border-white text-white hover:bg-white hover:text-black ">R&#xe9;sum&#xe9;</a>
                    </div>
                    
                    <div onClick={showMenu} ref={barRef} className=" flex relative items-center my-auto lg:hidden text-3xl z-50 w-[8%] h-[15px]">
                        <span className="bar_1 absolute  bg-green-600 w-full h-[21%] rounded-full "></span>
                        <span className="bar_2 absolute  bg-green-600 w-[50%] h-[21%] rounded-full "></span>
                    </div>
                </div>
                <div ref={navRef} className="menu absolute top-0 bg-slate-900 z-10 py-5 w-screen h-screen">
                <nav className="flex flex-col relative items-center justify-center text-white text-xl h-screen">
                    <a href="/#"><p className="p-5 ">My Projects</p></a>
                    <a href="#skill"><p className="p-5 ">My Skills</p></a>
                    <a href="/#"><p className="p-5 ">Reach out</p></a>
                    <a href="/resume/kolawole.pdf" download><p className="p-5 ">Download my R&#xe9;sum&#xe9;</p></a>
                    <div className="flex w-6/12 text-2xl justify-between absolute bottom-[200px]  max-[400px]:bottom-[100px]">
                        <a href="https://twitter.com/xoloyinksweb" target="_blank"><FaTwitter  className="text-green-600" /></a>
                        <a href="#"><FaLinkedin  className="text-green-600"/></a>
                        <a href="https://github.com/xoloyinks" target="_blank"><FaGithub  className="text-green-600"/></a>
                    </div>
                </nav>
            </div>
            </section>
            
        </>
    )
}