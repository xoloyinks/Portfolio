import React from "react";
import react_img from './images/icons8-react.svg';
import img from './images/icons8-react.svg';
import html_img from './images/icons8-html-5-96.png';
import javascript_img from './images/icons8-javascript.svg';
import css_img from './images/icons8-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-96.png';
import bootstrap_img from './images/icons8-bootstrap.svg';
import tailwind_img from './images/icons8-tailwindcss.svg';
import { keyboard } from "@testing-library/user-event/dist/keyboard";


const skill_data = [
    {
        title: 'React',
        avatar: react_img,
        content: ''
    },
    {
        title: 'HTML',
        avatar: html_img,
        content: ''
    },
    {
        title: 'JavaScript',
        avatar: javascript_img,
        content: ''
    },
    {
        title: 'Bootstrap',
        avatar: bootstrap_img,
        content: ''
    },
    {
        title: 'CSS',
        avatar: css_img,
        content: ''
    },
    {
        title: 'Tailwind CSS',
        avatar: tailwind_img,
        content: ''
    }
]


const Map_skill = () => {
    return skill_data.map(
        (data) => <Skill title={data.title} avatar={data.avatar} content={data.content} />
    )
}

const Skill = ({title, avatar, content}) => {
    return(
        <>
        
            <section className="each_section mt-3 flex flex-col justify-between rounded text-center py-5 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)] shadow-white-3/12 bg-slate-900 w-[45%] lg:w-[30%] max-[650px]:mx-auto">
                <div className="w-[50%]  h-[fit-content] mx-auto drop-shadow shadow-red-500 ">
                    <img src={avatar} alt="avatar" className="mx-auto" />
                </div>
                <div className="p-5 text-gray-500 font-bold max-[420px]:text-lg ">
                    {title}
                </div>
                <div className="text-white px-4 text-sm max-[420px]:tracking-wider ">
                    {content}
                </div>
                <br />
            </section>
            <br />
            <br />
        </>
    )
}

const padding = 'px-[180px]';
export default function Skills(){
    return(
        <>
            <section id="skill" className="flex flex-col px-[20px] sm:px-[50px]  py-8 w-[100%] h-auto bg-slate-900 relative md:px-[50px] lg:px-[100px] xl:px-[150px] ">
               
                <div className="self-center w-full">
                    <div className="text-left py-4 z-50">
                        <h1 className="text-white text-5xl max-[420px]:text-4xl ">My Skills</h1>
                    </div><br /><br />
                    <div className=" flex flex-wrap justify-between w-[auto]">
                        <Map_skill />
                    </div>
                </div>
            </section>
        </>
    )
}
