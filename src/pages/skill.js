import React from "react";
import react_img from './images/icons8-react.svg';
import img from './images/icons8-react.svg';
import typescript_img from './images/icons8-typescript.svg';
import javascript_img from './images/icons8-javascript.svg';
import css_img from './images/icons8-css3.svg';
import git_img from './images/icons8-git.svg';
import tailwind_img from './images/icons8-tailwindcss.svg';
import { keyboard } from "@testing-library/user-event/dist/keyboard";


const skill_data = [
    {
        title: 'React',
        avatar: react_img,
        level: '50'
    },
    {
        title: 'TypeScript',
        avatar: typescript_img,
        level: '80'
    },
    {
        title: 'JavaScript',
        avatar: javascript_img,
        level: '60'
    },
    {
        title: 'Git',
        avatar: git_img,
        level: '70'
    },
    {
        title: 'CSS',
        avatar: css_img,
        level: '60'
    },
    {
        title: 'Tailwind',
        avatar: tailwind_img,
        level: '80'
    }
]


const Map_skill = () => {
    return skill_data.map(
        (data) => <Skill title={data.title} avatar={data.avatar} level={data.level} />
    )
}

const Skill = ({title, avatar, level}) => {
    return(
        <>
        
            <section className="each_section  py-5 mt-3 bg-slate-900 w-[32%] flex flex-col justify-between rounded text-center max-[380px]:py-2 max-[380px]:mt-1 max-[640px]:h-auto lg:w-[27%] max-[650px]:mx-auto">
                <div className="w-[50%] h-[fit-content] mx-auto drop-shadow shadow-red-500 max-[640px]:w-[40%] ">
                    <img src={avatar} alt="avatar" className="mx-auto" />
                </div>
                <div className="p-5 opacity-50 text-gray-100 max-[640px]:text-sm max-[640px]:p-2 ">
                    {title}
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
            <section id="skill" className="flex flex-col px-[35px] sm:px-[50px]  py-8 w-[100%] h-auto bg-slate-900 relative max-[640px]:py-2 md:px-[50px] lg:px-[100px] xl:px-[150px]">
               
                <div className="self-center w-full">
                    <div className="z-50 py-4 text-left">
                        <h1 className="text-white text-3xl text-center opacity-60 max-[640px]:text-xl">Tech Stack</h1>
                    </div><br className="max-[640px]:hidden" />
                    <div className="flex flex-wrap justify-between w-auto ">
                        <Map_skill />
                    </div>
                </div>
            </section>
        </>
    )
}
