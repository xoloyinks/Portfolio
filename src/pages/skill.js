import React from "react";
import react_img from './images/icons8-react.svg';
import img from './images/icons8-react.svg';
import html_img from './images/icons8-html-5-96.png';
import javascript_img from './images/icons8-javascript.svg';
import css_img from './images/icons8-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-96.png';
import bootstrap_img from './images/icons8-bootstrap.svg';
import tailwind_img from './images/icons8-tailwindcss.svg';


var blobColor = '#374151';





const skill_data = [
    {
        title: 'React',
        avatar: react_img,
        content: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    },
    {
        title: 'HTML',
        avatar: html_img,
        content: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    },
    {
        title: 'JavaScript',
        avatar: javascript_img,
        content: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    },
    {
        title: 'Bootstrap',
        avatar: bootstrap_img,
        content: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    },
    {
        title: 'CSS',
        avatar: css_img,
        content: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    },
    {
        title: 'Tailwind CSS',
        avatar: tailwind_img,
        content: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    }
]

const Svg = () => {
    return(
        <>
            <svg width="500" height="500" viewBox="-30 -180 170 230" xmlns="http://www.w3.org/2000/svg" className='svg absolute bottom-0 right-0 -rotate-90 max-[420px]:hidden'>
                    <path fill={blobColor} d="M47.2,-56.3C52.9,-41.5,43.6,-20.8,43.4,-0.2C43.2,20.3,52.1,40.7,46.4,56.9C40.7,73.2,20.3,85.3,-1.1,86.4C-22.6,87.6,-45.2,77.7,-60.5,61.5C-75.7,45.2,-83.6,22.6,-83.8,-0.2C-83.9,-22.9,-76.4,-45.9,-61.1,-60.7C-45.9,-75.5,-22.9,-82.2,-1.1,-81.2C20.8,-80.1,41.5,-71.2,47.2,-56.3Z" />
            </svg>
        </>
    )
}

const Map_skill = () => {
    return skill_data.map(
        (data) => <Skill title={data.title} avatar={data.avatar} content={data.content} />
    )
}
const Skill = ({title, avatar, content}) => {
    return(
        <>
        
            <section  className=" w-[70%] mt-3 rounded text-center py-5 drop-shadow shadow-red-500 bg-gray-800 sm:w-[45%] lg:w-[30%] max-[650px]:mx-auto max-[420px]:w-[95%]">
                <div className="w-[50%]  h-[fit-content] mx-auto drop-shadow shadow-red-500">
                    <img src={avatar} alt="avatar" className="mx-auto" />
                </div>
                <div className="p-5 text-gray-500 font-bold max-[420px]:text-lg">
                    {title}
                </div>
                <div className="text-white px-4 text-sm max-[420px]:tracking-wider ">
                    {content}
                </div>
                <br />
            </section>
        
        </>
    )
}

const padding = 'px-[180px]';
export default function Skills(){
    return(
        <>
            <section id="skill" className="z-30 flex px-[50px]  py-8 w-[100%] h-auto bg-gray-800 relative md:px-[50px] lg:px-[100px] xl:px-[180px] ">
                <div className="self-center ">
                    <Svg />
                    <div className="text-left py-4 z-50">
                        <h1 className="text-white text-5xl max-[420px]:text-4xl ">My Skills</h1>
                    </div><br /><br />
                        <div className="flex flex-wrap justify-between w-full ">
                                <Map_skill />
                        </div>

                </div>
            </section>
        </>
    )
}
