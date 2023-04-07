import React from "react"
import { FaBox, FaGithub, FaLinkedin, FaMagento, FaMapPin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import svg_img from './images/download (8).svg'
import svg_back from './images/download (3).svg'
import svg_bottom from './images/job_done.svg'
// import './src/Bootstrap/bootstrap-5.1.1-dist/css/bootstrap.min.css';
import img from './images/self_one.jpg'

const padding = 'px-[150px]';

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
            <section id="about" className="relative sm:h-screen pt-24 py-5 flex flex-col lg:flex justify-between z-10 w-[100%] lg:px-[50px] md:px-[40px] md:flex-row lg:px-[50px] xl:px-[120px] max-[500px]:px-[20px]">
                    {/* SOCIAL ICON FIXED */}
                    <div id="poll-socials" className="hidden z-0 fixed bottom-0 items-center px-3 left-[30px] w-[60px] overflow-x-hidden h-[50%] flex flex-col justify-between lg:flex min-[1020px]:left-[10px]">
                        <div id="icon-socials" className="h-[30%] flex flex-col justify-between">
                            <a href="https://twitter.com/xoloyinksweb" target="_blank"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="https://github.com/xoloyinks" target="_blank"><FaGithub /></a>
                        </div>
                        <div id="poll" className="border-l-2 border-orange-500 h-[60%] "></div>
                    </div>

                   {/* MOUSE EVENT */}
                    
                   
                    {/* END OF SOCIAL ICON FIXED */}
                    {/* <div className="map absolute w-[100px] bottom-[30px]  opacity-100">
                        <div className="absolute  motion-safe:animate-bounce "><FaMapPin color="white" /></div>
                        <img src={svg_img} alt="" />
                    </div> */}
                    
                    
                <div id="about_me" className=" about_img self-center py-8 px-[17px] sm:py-2 sm:px-[20px] text-white max-[850px]:w-[100%] ">
                    <p>
                        <h1 className=" text-[20px]  leading-[40px] sm:text-[15px] text-gray-400 ">Hi, my name is</h1>
                    </p>
                    <p id="owner">
                        <h1 className="text-white sm:text-[70px] leading-[60px] sm:leading-[100px] max-[420px]:text-[40px] max-[640px]:text-[60px]">
                            Kolawole <br className="sm:hidden" /> Moses.
                        </h1>
                        <div id="my-mouse" className="absolute z-50 rounded-full top-[200px]"></div>
                    </p>
                    <br className="sm:hidden" />
                    <p className="__pointerX">
                        <h1 className=" sm:text-4xl sm:leading-[60px] max-[420px]:text-[20px] text-white">
                            I build Remarkable things for the web.
                        </h1>
                    </p><br classname="max-[420px]:hidden" />
                    <div className="w-[100%] sm:w-[60%] "className="__pointerX">
                        <p className="leading-[30px] text-[15px] text-white tracking-widest sm:tracking-wider sm:text-sm  ">
                            I’m a Frontend Developer specializing in building exceptional 
                            digital experiences. Currently, i'm focused on building accessible, 
                            human-centered products.
                        </p>
                    </div><br />
                    <div className="relative w-[220px] h-[70px] sm:w-[200px] sm:h-[50px] overflow-hidden ">
                        <a href="#project" className="okay flex justify-center items-center rounded-lg overflow-hidden border-2 border-white w-full h-full sm:font-semibold text-white  sm:text-[10px]  max-[420px]:text-sm hover:text-black">
                            SEE MY WORK <span className="font-bold text-2xl ml-3"> &#x2192;</span> 
                        </a>
                    </div>
                    <br />
                </div>
                <div id="about_image owner" className="port_img w-[50%] drop-shadow shadow-red-500 backdrop-blur border-2 border-orange-900  self-center rounded-full lg:w-[50%] lg:h-[450px] max-[850px]:w-[50%] max-[850px]:h-[800px] max-[500px]:h-[300px]  max-[500px]:border-gray-700 max-[500px]:w-[70%] max-[420px]:h-[200px]">
                    {/* <img src={img} alt="ME" className="w-full h-full "/> */}
                </div>
            
            </section>
        </>
    )
}
