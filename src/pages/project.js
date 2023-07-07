import React, { createContext } from "react";
import { Outlet, Link } from 'react-router';
import pixels from './images/icons8-jewelry-64.png';
import portfolio from './images/icons8-portfolio-48.png';
import { useState } from "react";


const project_data = [
    {
        image: pixels,
        heading: 'Jewelry store',
        title: 'Jewelry store',
        to: '/jewelry',
        languages: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        weblink: 'jewelry-git-master-xoloyinks.vercel.app/' 
    },
    {
        image: portfolio,
        heading: 'xoloyinks',
        title: 'Personal website',
        to: '/personal-website',
        languages: [
            'React',
            'Tailwind CSS'
        ],
        weblink: 'xoloyinks.vercel.app'
    }
]

var blobColor = '#1f2937';
const priColor = "green-800";

const Map_project = () => {
    return project_data.map(
        (data , i) => <Project key={i} id={i}  img={data.image} title={data.title} lead={data.to} heading={data.heading} languages={data.languages} weblink={data.weblink} />
    )
}
const Languages = ({prog}) => {
    return(
        <>
            <div className={"bg-green-900 text-white mt-3 text-sm rounded-full w-[50%] p-2 mx-auto max-[380px]:text-[13px]"}>{prog}</div>
        </>
    )
}


const Project = ({img,id, title, lead, heading, weblink}) => {
    const [check, setCheck] = useState(id);
    return(
        <>
                    <div className="each_section sec w-[90%] mx-auto h-[30vh] my-4 bg-slate-900 shadow-md shadow-slate-800">
                        <a href={lead}  className="project_logo h-[70%] w-full flex items-center justify-center text-xl text-slate-400 font-bold">
                            <img src={img} alt="" className="w" />
                            {heading}
                        </a>
                        <div className="h-[30%] bg-slate-800 p-5 text-white text-sm flex flex-col">
                            <span>{title}</span>
                            <a href={`https://${weblink}`} target="_blank" className="text-blue-500">{weblink}</a>
                        </div>
                    </div>
            
        <Outlet />
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


