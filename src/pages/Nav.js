import React from "react";
import { useRef } from "react";
import {FaBars, FaEnvelope, FaTwitter, FaWhatsapp, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs';

window.onscroll = function(){
    scroll();
};

window.onload = function(){
    scroll();
}

const priColor = "green-800";

function scroll(){
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1000){
        document.querySelector(".arrow").style.opacity = '1';
        document.getElementById('navlist').style.top = "-200px";
     }else{
        document.getElementById('navlist').style.top = '0';
        document.querySelector('.arrow').style.opacity = "0";
     }
}
export default function Nav(){
    const navRef = useRef();
    const barRef = useRef();
    const showMenu = () => {
        navRef.current.classList.toggle('responsive_menu');
        barRef.current.classList.toggle('bar_change');
    }

    const hideMenu = () => {
        navRef.current.classList.remove('responsive_menu');
        barRef.current.classList.remove('bar_change');
    }

    return(
        <>
            <section id="navlist" className="fixed top-0 h-auto z-50 w-screen">
                <div className="nav_content flex items-center justify-between px-[15px] backdrop-blur-3xl py-8 nav w-auto z-50 sm:py-10 max-[380px]:py-[20px] sm:items-center sm:px-[50px] md:px-[29px] lg:px-[100px] xl:px-[80px] min-[1024px]:px-[60px]">
                    <div className={`logo text-white font-bold w-[120px] p-3 rounded-full text-center sm:text-[12px]`}>
                        XOLO.
                    </div>
                    
                    <div className="hidden lg:flex lg:items-center justify-between w-5/12 text-black text-white  tracking-widest text-sm">
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#project" className= "nav-opt px-[10px] py-2 ">My Works</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#skill" className=" nav-opt px-[10px] py-2">Tech Stack</a></span>
                        <span className="overflow-hidden w-auto h-auto py-3"><a href="#contact" className=" nav-opt px-[10px] py-2">Contact</a></span>
                        <a href="/resume/kolawole.pdf" download className="btn font-bold relative px-[32px] py-[8px] rounded-lg border-2 border-white text-white hover:bg-white hover:text-black ">R&#xe9;sum&#xe9;</a>
                    </div>
                    
                    <div onClick={showMenu} ref={barRef} className=" flex relative items-center  text-3xl z-50 w-[8%] h-[15px] my-auto md:w-[5%] lg:hidden">
                        <span className="bar_1 absolute  bg-green-600 w-full h-[21%] rounded-full "></span>
                        <span className="bar_2 absolute  bg-green-600 w-[50%] h-[21%] rounded-full "></span>
                    </div>
                </div>
                <div ref={navRef} className="menu absolute top-0 bg-slate-900 z-10 py-5 w-screen h-screen">
                <nav className="flex flex-col h-screen relative items-center justify-center text-white max-[380px]:text-sm max-[380px]:font-bold max-[640px]:text-xl md:text-2xl">
                    <a href="#project"><p onClick={hideMenu} className="px-5 py-3 nav_link">My Works</p></a>
                    <a href="#admin_avatar"><p onClick={hideMenu} className="px-5 py-3 nav_link">Tech Stack</p></a>
                    <a href="#admin"><p onClick={hideMenu} className="px-5 py-3 nav_link">About Me</p></a>
                    <a href="#contact"><p onClick={hideMenu} className="px-5 py-3 nav_link">Reach out</p></a>
                    <a href="/resume/kolawole.pdf" download><p onClick={hideMenu} className="px-5 py-3 nav_link">Download my R&#xe9;sum&#xe9;</p></a>
                    <div className="flex   justify-between absolute max-[380px]:bottom-[160px] max-[380px]:w-4/12 max-[380px]:text-xl max-[640px]:bottom-[100px] max-[640px]:text-2xl max-[640px]:w-6/12 md:bottom-[200px] md:w-4/12 md:text-3xl">
                        <a href="https://twitter.com/xoloyinksweb" target="_blank"><FaTwitter  className="text-green-600" /></a>
                        <a href="https://www.linkedin.com/in/kolawole-omopariola-180012278" target="_blank"><FaLinkedin  className="text-green-600"/></a>
                        <a href="https://github.com/xoloyinks" target="_blank"><FaGithub  className="text-green-600"/></a>
                    </div>
                </nav>
            </div>
            </section>
            
        </>
    )
}