import React from "react";
import { FaBox, FaMagento, FaMapPin } from "react-icons/fa"
import svg_img from './images/download (8).svg'
import svg_back from './images/download (3).svg'
import svg_bottom from './images/job_done.svg'
// import './src/Bootstrap/bootstrap-5.1.1-dist/css/bootstrap.min.css';
// import img from './images/download.svg'

const padding = 'px-[150px]';
export default function Caption(){
    return(
        <>
            <section id="about" className="relative sm:h-screen pt-24 py-5 flex flex-col lg:flex justify-between z-10 w-[100%] lg:px-[50px] md:px-[40px] md:flex-row lg:px-[50px] xl:px-[120px] max-[500px]:px-[20px]">
                    <div className="map absolute w-[100px] bottom-[30px]  opacity-70">
                        <div className="absolute  motion-safe:animate-bounce "><FaMapPin color="white" /></div>
                        <img src={svg_img} alt="" />
                    </div>
                    
                    {/* <div className="absolute bottom-[40px] opacity-50 motion-safe:animate-spin rounded-[15px] p-5 border-2 border-gray-800 h-[20px] w-[20px] max-[420px]:bottom-[20px] max-[420px]:right-[10px] max-[420px]:border-gray-600 max-[420px]:right-[500px]"></div> */}
                    {/* <div className="absolute bottom-[30px] opacity-50 animate-spin rounded-[15px] p-5 border-2 border-gray-800 h-[20px] w-[20px] max-[420px]:bottom-[20px] max-[420px]:right-[10px] max-[420px]:border-gray-600 max-[420px]:right-[500px]"></div> */}
                    {/* <div className="absolute bottom-[30px] opacity-50 motion-safe:animate-ping rounded-[15px] p-5 border-2 border-gray-800 h-[20px] w-[20px] max-[420px]:bottom-[20px] max-[420px]:right-[10px] max-[420px]:border-gray-600 max-[420px]:right-[500px]"></div> */}
                    {/* <div className="absolute bottom-[30px] opacity-50 motion-safe:animate-pulse rounded-[15px] p-5 border-2 border-gray-800 h-[20px] w-[20px] max-[420px]:bottom-[20px] max-[420px]:right-[10px] max-[420px]:border-gray-600 max-[420px]:right-[500px]"></div> */}
                <div className="about_img self-center py-2 sm:px-[20px] text-white max-[850px]:w-[100%]">
                    <div className="absolute right-[200px] opacity-5 animate-pulse rounded-[15px] p-0 border-2 border-gray-700 h-[40px] w-[40px] max-[420px]:bottom-[20px] max-[420px]:right-[10px]"></div>
                    <p>
                        <h1 className="text-4xl leading-[60px] max-[850px]:text-3xl ">Hi!</h1>
                    </p>
                    <p>
                        <h1 className="text-5xl leading-[60px] max-[420px]:text-[40px]">
                            I am Kolawole
                        </h1>
                    </p>
                    <p>
                        <h1 className="text-5xl leading-[60px] max-[420px]:text-[40px]">
                            A Frontend Web Developer
                        </h1>
                    </p><br classname="max-[420px]:hidden" />
                    <div className="w-[100%] sm:w-[80%] ">
                        <p className="leading-[30px] tracking-wider text-sm max-[420px]:text-lg">
                            A self thought Front end Web developer from Akure.If you 
                            need a <strong>Generic Framework, Fast,</strong> and a <strong>Responsive </strong> 
                            Website or Web Application, do not hesitate to hire me.

                        </p>
                    </div><br />
                    <div className="w-[fit-content]">
                        <a href="#contact" className="hidden bg-gray-700 w-auto px-10 py-2 text-white text-center text-sm rounded-full border-2 border-white sm:block max-[420px]:text-lg">Let's Connect!</a>
                    </div>
                    <br />
                </div>
                <div className="port_img w-[50%] drop-shadow shadow-red-500 backdrop-blur border-4 border-gray-500 md:h-[450px] self-center rounded-full lg:w-[30%] max-[850px]:w-[50%] max-[850px]:h-[500px] max-[500px]:h-[300px]  max-[500px]:border-gray-700 max-[500px]:w-[70%] max-[420px]:h-[200px]">
                    {/* <img src={img} alt="ME" className="w-full h-full "/> */}
                </div>
            
            </section>
        </>
    )
}