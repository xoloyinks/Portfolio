import React from "react";
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
export default function Contact(){
    return(
        <>
            <section id="contact" className="w-[100%] h-auto bg-gray-800 relative px-[50px] md:px-[50px] lg:px-[100px] xl:px-[180px] max-[420px]:px-[20px]">
                <Svg />
                <br />
                <div className="text-left py-5 z-50">
                        <h1 className="text-gray-700 text-5xl max-[420px]:text-4xl">Reach out</h1>
                </div><br /> 
                <hr className="border-2 border-gray-100 z-50" />
                <div className=" sm:flex w-full py-5 items-center justify-between z-50">
                    <div className="w-[45%] text-xl sm:text-3xl  max-[420px]:text-[25px] max-[420px]:w-[90%]">
                        <span className="py-3 text-white w-7/12 ">
                            <a href="#" className="w-full ">
                                <span className=" w-full justify-between flex items-center ">
                                    <span><FaFacebook color="white" /></span>
                                    <span className=" w-10/12"> Omopariola Kolawole</span>
                                </span>
                            </a>
                        </span>
                        <br />
                        <span className="py-3 text-white w-6/12 ">
                            <a href="#" className="w-full ">
                                <span className=" w-full justify-between flex items-center ">
                                    <span><FaEnvelope color="white" /></span>
                                    <span className=" w-10/12"> xoloyinks@gmail.com</span>
                                </span>
                            </a>
                        </span>
                        <br />
                        <span className="py-3 text-white w-6/12">
                            <a href="#" className="w-full ">
                                <span className=" w-full justify-between flex items-center ">
                                    <span><FaTwitter color="white" /></span>
                                    <span className=" w-10/12"> @xoloyinks_</span>
                                </span>
                            </a>
                        </span>
                        <br />
                        <span className="py-3 text-white w-6/12">
                            <a href="#" className="w-full ">
                                <span className=" w-full justify-between flex items-center ">
                                    <span><FaLinkedin color="white" /></span>
                                    <span className=" w-10/12"> Omopariola Kolawole</span>
                                </span>
                            </a>
                        </span>
                        <br />
                        <span className="py-3 text-white w-6/12">
                            <a href="#" className="w-full ">
                                <span className=" w-full justify-between flex items-center ">
                                    <span><FaWhatsapp color="white" /></span>
                                    <span className=" w-10/12"> 09035526185</span>
                                </span>
                            </a>
                        </span>
                    </div>
                    <br className="hidden max-[420px]:block" />

                    {/* <div className="w-[100%] sm:w-[45%] z-50 backdrop-blur ">
                        <h1 className="text-lg text-white">Send me an email</h1>
                        <form action="" className="w-full">
                            <div className="py-5 h-[auto] flex flex-col justify-between">
                                <div className="h-full flex flex-col justify-between">
                                    <span className="w-full"><input type="text" placeholder="Your name" className="p-3 w-full rounded-[15px]" /></span>
                                    <br />
                                    <span className="w-full"><input type="email" placeholder="Your email" className="p-3 w-full rounded-[15px]" /></span>
                                </div>
                                <br />
                                <div className="">
                                    <textarea name="" id="" placeholder="Your massage"  className="p-3 w-full h-full rounded-[15px]"></textarea>
                                </div>
                            </div>
                            
                            <button className="px-8 py-3 rounded bg-gray-700 text-white text-sm max-[420px]:text-lg">Send</button>
                        </form>
                    </div> */}
                </div>
                {/* <br /> */}
               
                <hr className="border-2 border-gray-100" />
               <br />
               <br />
                
               
                <span className="text-white text-lg font-semibold"> &copy; XOLO 2023</span>
                <br />
                <br />
            </section>
        </>
    )
}