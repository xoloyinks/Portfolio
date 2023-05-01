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
        title: 'Fiverr Profile Page',
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
const priColor = "green-800";

const Map_project = () => {
    return project_data.map(
        (data) => <Project img={data.image} title={data.title} languages={data.languages} weblink={data.weblink} />
    )
}
const Languages = ({prog}) => {
    return(
        <>
            <div className={"bg-green-900 text-white mt-3 text-sm rounded-full w-[50%] p-2 mx-auto max-[380px]:text-[13px]"}>{prog}</div>
        </>
    )
}

const Project = ({img , title, languages, weblink}) => {
    return(
        <>
            <section className="relative each_section w-[70%] text-center h-auto bg-slate-900 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)] shadow-red-500 p-5 mt-3 sm:w-[45%] sm:px-[10px] max-[650px]:mx-auto max-[420px]:w-[95%] lg:w-[30%] sec">
                {/* <div className="absolute  text-white right-0 left-0 top-0 h-[100%] link">
                    <a className="flex text-2xl font-semibold backdrop-blur-lg h-full items-center mx-auto justify-center">
                        <span className="px-3"> Coming soon!</span>
                    </a>
                </div> */}
                <div className="h-[fit-content]">
                    <img src={img} alt="Project image" className="mx-auto max-[380px]:w-[250px] " />
                </div>
                <div className="p-5 text-gray-500 font-bold">
                    {title}
                </div>
                <div className="">
                    {languages.map(data => <Languages prog={data} />)}
                </div>
                <br />
                <div className="absolute top-0 text-[10px] opacity-50 font-semibold bg-black text-white mx-auto w-[fit-content] p-3">
                    COMING SOON!
                </div>
            </section>
            

        </>
    )
}
export default function Projects(){
    return(
        <>
           <section id="project"  className="bg-slate-900 px-[20px] flex justify-between flex-wrap w-[100%] relative md:px-[50px] lg:px-[100px] xl:px-[150px]">
                <div className="text-left py-4 z-30 mt-5 max-[640px]:mx-auto">
                    <h1 className="text-white text-5xl max-[380px]:text-2xl max-[640px]:text-4xl">My Works</h1>
                </div><br /><br />
                <div className="flex flex-wrap justify-between w-full mt-3 max-[380px]:mt-0">
                    <Map_project />
                    {/* <h1 className="text-4xl text-gray-600">COMING SOON!</h1> */}
                </div>
                
           </section>
        </>
    )
}
