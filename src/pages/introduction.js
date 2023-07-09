import React from "react"
import { FaBox, FaGithub, FaLinkedin, FaMagento, FaMapPin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import svg_img from './images/download (8).svg'
import svg_back from './images/download (3).svg'
import svg_bottom from './images/job_done.svg'
// import './src/Bootstrap/bootstrap-5.1.1-dist/css/bootstrap.min.css';
import img from './images/IMG-20221106-WA0014-removebg-preview.png'

const padding = 'px-[150px]';
const secColor = "green-600";
const priColor = "green-800";
const adminName = "Kolawole Moses.";

var i = 0;

setTimeout(
    function typing(){
        if(i < adminName.length){
            document.getElementById('typing').textContent += adminName.charAt(i);
            i++;
            setTimeout(typing, 80);
        }
}, 2200)


setTimeout(function(){
    const cursor = document.getElementById("my-mouse");

    window.addEventListener("mousemove", function(e){
        var x = e.clientX;
        var y = e.clientY;
    
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        cursor.style.opacity = "1";
    })
    
}, 1000);


export default function Caption(){
   
    return(
        <>
            <section id="about" className="relative pt-24 py-5 flex flex-col justify-between z-10 w-[100%] max-[500px]:px-[20px] sm:h-screen lg:px-[50px] md:px-[40px] lg:flex lg:flex-row lg:h-[fit-content] xl:h-screen xl:px-[120px] ">
                    {/* SOCIAL ICON FIXED */}
                    <div id="poll-socials" className={`hidden z-0 fixed bottom-0 items-center px-3 left-[30px] w-[60px] overflow-x-hidden h-[50%] flex flex-col justify-between min-[1020px]:left-[10px] lg:hidden xl:flex  min-[1366px]:h-[40%]`}>
                        <div id="icon-socials" className={`h-[30%] flex flex-col justify-between`}>
                            <a href="https://twitter.com/xoloyinks_" target="_blank"><FaTwitter className={`text-green-600`} /></a>
                            <a href="https://www.linkedin.com/in/kolawole-omopariola-180012278" target="_blank"><FaLinkedin className={`text-green-600`} /></a>
                            <a href="https://github.com/xoloyinks" target="_blank"><FaGithub className={`text-green-600`} /></a>
                        </div>
                        <div id="poll" className={`border-l-2 border-green-600 h-[60%] text-green-600  min-[1366px]:h-[60%]`}></div>
                    </div>
                    
                    
                <div id="about_me" className="about_img self-center px-[17px] text-white max-[380px]:py-4  max-[640px]:py-8 sm:py-2 sm:px-[20px] md:py-10 max-[850px]:w-[100%] lg:py-16 xl:py-10 ">
                    <p>
                        <h1 className={`text-${secColor} font-bold leading-[40px]  max-[380px]:text-[15px] max-[380px]:leading-[20px] max-[640px]:text-[20px] sm:text-[15px] md:text-2xl lg:text-md xl:text-sm  min-[1366px]:text-lg`}>Hi, my name is</h1>
                    </p>
                    <p id="owner" className="overflow-hidden">
                        <p className={`text-white flex items-center sm:text-[70px] leading-[60px] sm:leading-[100px] max-[380px]:text-[35px] max-[420px]:text-[40px] max-[640px]:text-[60px] md:text-[80px] lg:text-[70px]  min-[1366px]:text-[80px]`}>
                             <br className="sm:hidden" /><span id="typing"></span> 
                        </p>
                        <div id="my-mouse" className="absolute z-50 rounded-full top-[200px]"></div>
                    </p>
                    {/* <br className="sm:hidden" /> */}
                    <div className="__pointerX">
                        <p className="text-white leading-[60px] opacity-70 tracking-wide text-2xl max-[380px]:leading-[20px] sm:text-4xl sm:leading-[60px] md:text-4xl ">
                            Frontend Engineer
                        </p>
                    </div>
                    <div className="w-[60%] max-[380px]:w-[80%] sm:w-[60%] __pointerX md:w-[80%]">
                        <p className="leading-[22px] text-white tracking-widest max-[380px]:mt-[12px] max-[380px]:text-[13px] max-[640px]:text-[15px] sm:tracking-wider sm:text-sm sm:w-9/12 md:text-xl md:mt-4 lg:text-[16px] xl:text-sm  min-[1366px]:text-[17px]">
                            Specializing in building exceptional 
                            Websites. Currently, i'm focused on building accessible, 
                            human-centered Web softwares.
                        </p>
                    </div><br />

                    {/* Mobile view Social list */}
                    <div className="p-2 w-[40%] flex justify-between opacity-70 max-[380px]:text-xl max-[640px]:text-2xl md:w-[30%] md:text-2xl xl:hidden">
                        <span><a href="https://twitter.com/xoloyinks_" target="_blank"><FaTwitter className="text-" /></a></span>
                        <span><a href="https://github.com/xoloyinks" target="_blank"><FaGithub className="" /></a></span>
                        <span><a href="https://www.linkedin.com/in/kolawole-omopariola-180012278" target="_blank"><FaLinkedin className="" /></a></span>
                    </div><br className="sm:hidden md:block"/>
                    <div className="relative w-[220px] h-[70px] max-[380px]:w-[200px] max-[380px]:h-[50px] sm:w-[200px] sm:h-[50px] md:h-[60px] lg:h-[50px] overflow-hidden ">
                        <a href="#project" className="okay flex justify-center items-center rounded-lg overflow-hidden border-2 border-white w-full h-full sm:font-semibold text-white  sm:text-[10px] md:text-[15px] lg:text-[12px] xl:text-[10px]  max-[420px]:text-sm hover:text-black">
                            SEE MY WORK <span className="ml-3 text-2xl font-bold"> &#x2192;</span> 
                        </a>
                    </div>
                    <br />
                </div>
                <div id="admin_avatar" className={`port_img w-[210px] h-[210px] relative backdrop-blur self-center rounded-full md:h-[350px] md:w-[350px] lg:w-[310px] lg:h-[250px] xl:w-[350px] xl:h-[280px]`}>
                    <img src={img} alt="Kolawole" className="z-40 w-full h-full"/>
                </div>
            
            </section>
        </>
    )
}


