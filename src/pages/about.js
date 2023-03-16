import React from "react";
import Nav from './Nav';
import Caption from "./introduction";

var blobColor = '#374151';

const Svg = () => {
    return(
        <>
                <svg width="500" height="500" viewBox="-100 -20 150 150" xmlns="http://www.w3.org/2000/svg" className=' svg absolute right-0 max-[520px]: max-[520px]:right-[100px]'>
                    <path fill={blobColor} d="M47.2,-56.3C52.9,-41.5,43.6,-20.8,43.4,-0.2C43.2,20.3,52.1,40.7,46.4,56.9C40.7,73.2,20.3,85.3,-1.1,86.4C-22.6,87.6,-45.2,77.7,-60.5,61.5C-75.7,45.2,-83.6,22.6,-83.8,-0.2C-83.9,-22.9,-76.4,-45.9,-61.1,-60.7C-45.9,-75.5,-22.9,-82.2,-1.1,-81.2C20.8,-80.1,41.5,-71.2,47.2,-56.3Z" />
                </svg>
                <svg width="500" height="500" viewBox="-30 -180 150 150" xmlns="http://www.w3.org/2000/svg" className=' svg absolute bottom-0 left-0 max-[520px]:hidden'>
                    <path fill={blobColor} d="M47.2,-56.3C52.9,-41.5,43.6,-20.8,43.4,-0.2C43.2,20.3,52.1,40.7,46.4,56.9C40.7,73.2,20.3,85.3,-1.1,86.4C-22.6,87.6,-45.2,77.7,-60.5,61.5C-75.7,45.2,-83.6,22.6,-83.8,-0.2C-83.9,-22.9,-76.4,-45.9,-61.1,-60.7C-45.9,-75.5,-22.9,-82.2,-1.1,-81.2C20.8,-80.1,41.5,-71.2,47.2,-56.3Z" />
                </svg>
                <svg width="400" height="400" viewBox="-30 -180 170 230" xmlns="http://www.w3.org/2000/svg" className=' svg absolute bottom-0 right-0 -rotate-90 max-[520px]:right-[100px] max-[520px]:rotate-45'>
                    <path fill={blobColor} d="M47.2,-56.3C52.9,-41.5,43.6,-20.8,43.4,-0.2C43.2,20.3,52.1,40.7,46.4,56.9C40.7,73.2,20.3,85.3,-1.1,86.4C-22.6,87.6,-45.2,77.7,-60.5,61.5C-75.7,45.2,-83.6,22.6,-83.8,-0.2C-83.9,-22.9,-76.4,-45.9,-61.1,-60.7C-45.9,-75.5,-22.9,-82.2,-1.1,-81.2C20.8,-80.1,41.5,-71.2,47.2,-56.3Z" />
                </svg>
        </>
    )
}
export default function About(){
    return(
        <>
           <section className="w-[100%] h-auto  lg:h-screen relative">
                <Nav />
                <Svg />
                <Caption />
           </section>
        </>
    )
}