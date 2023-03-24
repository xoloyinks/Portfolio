import React from "react";
import pixel from './images/Screenshot(6).png';
import xprocart from './images/Screenshot(21).png';
import frage from './images/Screenshot(22).png';
import sport from './images/Screenshot(23).png';
import fiver from './images/Screenshot(24).png';
import blog from './images/Screenshot(35).png';
import { BsGlobe } from 'react-icons/bs'

const project_data = [
    {
        image: pixel,
        title: 'Pixel Web Application',
        languages: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        weblink: 'www.facebook.com' 
    },
    {
        image: xprocart,
        title: 'XproCart Shopping site',
        languages: [
            'React',
            'Tailwind CSS'
        ],
        weblink: 'www.twitter.com'
    },
    {
        image: frage,
        title: 'FRAGE-X Perfume Store site',
        languages: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        weblink: 'www.whatsapp.com'
    },
    {
        image: sport,
        title: 'Evet Sport Website',
        languages:[
            'React',
            'Tailwind CSS'
        ],
        weblink: 'www.twitter.com'
    },
    {
        image: fiver,
        title: 'Fiver Profile Page',
        languages:[
            'React',
            'Tailwind CSS'
        ],
        weblink: 'www.twitter.com'
    },
    {
        image: blog,
        title: 'Linda Paul Blog',
        languages:[
            'HTML',
            'CSS',
            'JavaScript'
        ],
        weblink: 'www.twitter.com'
    }
]

var blobColor = '#1f2937';

var Svg = () => {
    return(
        <>
            {/* <svg width="800" height="800" viewBox="-30 -180 350 350" xmlns="http://www.w3.org/2000/svg" className='svg absolute bottom-[-400px] left-0 max-[420px]:hidden'>
                    <path fill={blobColor} d="M47.2,-56.3C52.9,-41.5,43.6,-20.8,43.4,-0.2C43.2,20.3,52.1,40.7,46.4,56.9C40.7,73.2,20.3,85.3,-1.1,86.4C-22.6,87.6,-45.2,77.7,-60.5,61.5C-75.7,45.2,-83.6,22.6,-83.8,-0.2C-83.9,-22.9,-76.4,-45.9,-61.1,-60.7C-45.9,-75.5,-22.9,-82.2,-1.1,-81.2C20.8,-80.1,41.5,-71.2,47.2,-56.3Z" />
            </svg> */}
        </>
    )
}
const Map_project = () => {
    return project_data.map(
        (data) => <Project img={data.image} title={data.title} languages={data.languages} weblink={data.weblink} />
    )
}
const Languages = ({prog}) => {
    return(
        <>
            <div className="bg-orange-700 text-white mt-3 text-sm rounded-full w-[50%] p-2 mx-auto">{prog}</div>
        </>
    )
}

const Project = ({img , title, languages, weblink}) => {
    return(
        <>
            <section className="relative each_section w-[70%] text-center h-auto bg-slate-900 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)] shadow-red-500 p-5 mt-3 sm:w-[45%] sm:px-[10px] max-[650px]:mx-auto max-[420px]:w-[95%] lg:w-[30%] sec">
                <div className="absolute  text-white right-0 left-0 top-0 h-[100%] link">
                    <a href={weblink} className="flex text-2xl font-semibold backdrop-blur-lg h-full items-center mx-auto justify-center">
                       <BsGlobe /> <span className="px-3"> Visit Site</span>
                    </a>
                </div>
                <div className="h-[fit-content]">
                    <img src={img} alt="Project image" className="" />
                </div>
                <div className="p-5 text-gray-500 font-bold">
                    {title}
                </div>
                <div>
                    {languages.map(data => <Languages prog={data} />)}
                </div>
                <br />
            </section>
            

        </>
    )
}
export default function Projects(){
    return(
        <>
           <section id="project"  className="bg-slate-900 px-[20px] flex justify-between flex-wrap w-[100%] relative md:px-[50px] lg:px-[100px] xl:px-[150px]">
            
                <Svg />
                <div className="text-left py-4 z-30 mt-5">
                    <h1 className="text-white text-5xl max-[420px]:text-4xl">My Projects</h1>
                </div><br /><br />
                <div className="flex flex-wrap justify-between w-full mt-3">
                    <Map_project />
                </div>
                
           </section>
        </>
    )
}
