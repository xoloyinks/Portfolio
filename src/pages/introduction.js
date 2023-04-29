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
}, 500)


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
            <section id="about" className="relative sm:h-screen pt-24 py-5 flex flex-col lg:flex justify-between z-10 w-[100%] lg:px-[50px] md:px-[40px] md:flex-row xl:px-[120px] max-[500px]:px-[20px]">
                    {/* SOCIAL ICON FIXED */}
                    <div id="poll-socials" className={`hidden z-0 fixed bottom-0 items-center px-3 left-[30px] w-[60px] overflow-x-hidden h-[50%] flex flex-col justify-between lg:flex min-[1020px]:left-[10px]`}>
                        <div id="icon-socials" className={`h-[30%] flex flex-col justify-between`}>
                            <a href="https://twitter.com/xoloyinksweb" target="_blank"><FaTwitter className={`text-green-600`} /></a>
                            <a href="#"><FaLinkedin className={`text-green-600`} /></a>
                            <a href="https://github.com/xoloyinks" target="_blank"><FaGithub className={`text-green-600`} /></a>
                        </div>
                        <div id="poll" className={`border-l-2 border-green-600 h-[60%] text-green-600`}></div>
                    </div>
                    
                    
                <div id="about_me" className="about_img self-center py-8 px-[17px] sm:py-2 sm:px-[20px] text-white max-[850px]:w-[100%] ">
                    <p>
                        <h1 className={`text-[20px]  leading-[40px] sm:text-[15px] text-${secColor} font-bold`}>Hi, my name is</h1>
                    </p>
                    <p id="owner">
                        <p className={`text-white flex items-center sm:text-[70px] leading-[60px] sm:leading-[100px] max-[420px]:text-[40px] max-[640px]:text-[60px]`}>
                             <br className="sm:hidden" /><span id="typing"></span> 
                        </p>
                        <div id="my-mouse" className="absolute z-50 rounded-full top-[200px]"></div>
                    </p>
                    {/* <br className="sm:hidden" /> */}
                    <p className="__pointerX">
                        <p className="text-white opacity-70 tracking-wide text-2xl sm:text-4xl leading-[60px] ">
                            Frontend Developer
                        </p>
                    </p>
                    <div className="w-[60%] sm:w-[60%] "className="__pointerX">
                        <p className="leading-[22px] w-9/12 text-[15px] text-white tracking-widest sm:tracking-wider sm:text-sm  ">
                            Specializing in building exceptional 
                            digital experiences. Currently, i'm focused on building accessible, 
                            human-centered products.
                        </p>
                    </div><br />

                    <div className="text-2xl p-2 w-[40%] flex justify-between opacity-70 sm:hidden">
                        <span><a href="#"><FaTwitter className="text-" /></a></span>
                        <span><a href="#"><FaGithub className="text-green" /></a></span>
                        <span><a href="#"><FaLinkedin className="text-green" /></a></span>
                    </div><br className="sm:hidden"/>
                    <div className="relative w-[220px] h-[70px] sm:w-[200px] sm:h-[50px] overflow-hidden ">
                        <a href="#project" className="okay flex justify-center items-center rounded-lg overflow-hidden border-2 border-white w-full h-full sm:font-semibold text-white  sm:text-[10px]  max-[420px]:text-sm hover:text-black">
                            SEE MY WORK <span className="font-bold text-2xl ml-3"> &#x2192;</span> 
                        </a>
                    </div>
                    <br />
                </div>
                <div id="" className={`port_img w-[210px] h-[210px] relative backdrop-blur self-center rounded-full lg:w-[350px] lg:h-[300px]`}>
                    <img src={img} alt="Kolawole" className="w-full h-full z-40"/>
                </div>
            
            </section>
        </>
    )
}


