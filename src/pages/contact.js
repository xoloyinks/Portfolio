import React from "react";
import './diff.css'
import { FaBriefcase, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

var blobColor = '#374151';
var Svg = () => {
    return(
        <>
            {/* <svg width="400" height="400" viewBox="-30 -180 170 230" xmlns="http://www.w3.org/2000/svg" className=' svg absolute bottom-0 right-0 -rotate-90'>
                    <path fill={blobColor} d="M47.2,-56.3C52.9,-41.5,43.6,-20.8,43.4,-0.2C43.2,20.3,52.1,40.7,46.4,56.9C40.7,73.2,20.3,85.3,-1.1,86.4C-22.6,87.6,-45.2,77.7,-60.5,61.5C-75.7,45.2,-83.6,22.6,-83.8,-0.2C-83.9,-22.9,-76.4,-45.9,-61.1,-60.7C-45.9,-75.5,-22.9,-82.2,-1.1,-81.2C20.8,-80.1,41.5,-71.2,47.2,-56.3Z" />
            </svg> */}
        </>
    )
}

window.addEventListener('scroll', revealPoint, true);
function revealPoint(){
    var revealed = document.querySelector('.contact');
    var revealedTop = revealed.getBoundingClientRect().top;

    if(revealedTop < window.innerHeight - 50){
        revealed.classList.add('present')
    }else{
        revealed.classList.remove('present')
    }
}
export default function Contact(){
    return(
        <>
            <section id="contact" className="w-screen overflow-x-hidden h-auto py-16 flex px-[45px] items-center justify-center bg-slate-900">
                <div className="contact w-full">
                    <div className="w-full sm:w-[60%] sm:mx-auto sm:text-center">
                        <h1 className="text-3xl sm:text-4xl text-orange-400 font-semibold">Send me a message!</h1><br />
                        <p className="text-white text-sm sm:text-lg tracking-wider">
                            Got a question or proposal, or just want <br /> 
                            to say hello? Go ahead.
                        </p>
                    </div><br /><br />
                    <form action="https://formspree.io/f/xpzejvgg" method="post">
                        <div className="flex flex-col gap-7  sm:flex sm:flex-row sm:w-[50%] sm:justify-between sm:mx-auto py-3">
                            <div className="flex flex-col sm:w-[45%]">
                                <label for="full-name" className="text-orange-400 text-sm opacity-100">Your name</label>
                                <input name="name" id="full-name" type="text" placeholder="Enter your name" required className="text-white bg-transparent py-3 border-b-2 border-gray-700 focus:outline-none"/>
                            </div>
                            <div className="flex flex-col sm:w-[45%]">
                                <label for="email" className="text-orange-400 text-sm opacity-100">Email Address</label>
                                <input id="email" name="email" type="email" required placeholder="Enter your email address"  className="text-white bg-transparent py-3 border-b-2 border-gray-700 focus:outline-none"/>
                            </div>
                        </div><br />
                        <div className="flex flex-col sm:w-[50%] sm:mx-auto">
                            <label for="message" className="text-orange-400 text-sm opacity-100" >Your message</label>
                            <textarea name="message" id="message" required placeholder="Hi, i think we need a Website for our brand or Company X. How soon can you hop on to discuss this?" cols="30" rows="3" className="resize-none py-3 bg-transparent border-b-2 border-gray-700 text-white focus:outline-none"></textarea>
                        </div>
                        <br /><br />
                        <div className="relative z-20 w-[200px] h-[70px] sm:w-[270px] sm:mx-auto sm:h-[50px] overflow-hidden ">
                            <button type="submit"  className="okayed flex justify-center items-center rounded-lg overflow-hidden border-2 border-white w-full h-full sm:font-semibold text-white  sm:text-[10px]  max-[420px]:text-sm hover:text-black">
                                SHOOT <span className="font-bold text-2xl ml-3"> &#x2192;</span> 
                            </button>
                    </div>
                    </form>
                </div>
            </section>
        </>
    )
}