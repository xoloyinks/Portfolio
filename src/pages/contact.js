import React from "react";
import './diff.css'
import { FaBriefcase, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const secColor = "green-600";


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
            <section id="contact" className="w-screen overflow-x-hidden h-auto py-16 flex px-[45px] items-center justify-center bg-slate-900 md:px-[10px] lg:px-[30px] xl:px-[45px]">
                <div className="contact w-full">
                    <div className="w-full sm:w-[60%] sm:mx-auto sm:text-center lg:w-[80%] xl:w-[60%]">
                        <h1 className={`text-3xl sm:text-4xl text-${secColor} font-semibold`}>Send me a message!</h1><br />
                        <p className="text-white text-sm sm:text-lg tracking-wider">
                            Got a question or proposal, or just want <br /> 
                            to say hello? Go ahead.
                        </p>
                    </div><br /><br />
                    <form action="https://formspree.io/f/xpzejvgg" method="post">
                        <div className="flex flex-col gap-7  sm:flex sm:flex-row sm:w-[50%] sm:justify-between sm:mx-auto py-3  md:w-[75%] xl:w-[45%] ">
                            <div className="flex flex-col sm:w-[45%]">
                                <label htmlFor="full-name" className={`text-${secColor} font-bold text-sm opacity-100`}>Your name</label>
                                <input name="name" id="full-name" type="text" placeholder="Enter your name" required className="text-white bg-transparent py-3 border-b-2 border-gray-700 focus:outline-none"/>
                            </div>
                            <div className="flex flex-col sm:w-[45%]">
                                <label htmlFor="email" className={`text-${secColor} font-bold text-sm opacity-100`}>Email Address</label>
                                <input id="email" name="email" type="email" required placeholder="Enter your email address"  className="text-white bg-transparent py-3 border-b-2 border-gray-700 focus:outline-none"/>
                            </div>
                        </div><br />
                        <div className="flex flex-col sm:w-[50%] sm:mx-auto  md:w-[75%] xl:w-[45%]">
                            <label htmlFor="message" className={`text-${secColor} font-bold text-sm opacity-100`} >Your message</label>
                            <textarea name="message" id="message" required placeholder="Hi, i think we need a Website for our brand or Company X. How soon can you hop on to discuss this?" cols="30" rows="3" className="resize-none py-3 bg-transparent border-b-2 border-gray-700 text-white focus:outline-none"></textarea>
                        </div>
                        <br /><br />
                        <div className="relative z-20 w-[200px] h-[70px] max-[640px]:w-[150px] max-[640px]:h-[50px] sm:w-[270px] sm:mx-auto sm:h-[50px] overflow-hidden">
                            <button type="submit"  className="okayed flex justify-center items-center rounded-lg overflow-hidden border-2 border-white w-full h-full max-[640px]:text-sm sm:font-semibold text-white sm:text-[10px] md:text-[15px] lg:text-[12px] xl:text-[10px]  hover:text-black">
                                SHOOT <span className="font-bold text-2xl ml-3"> &#x2192;</span> 
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}