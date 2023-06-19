import React from 'react';
import About from './about';
import Skills from './skill'
import Projects from './project';
import Contact from './contact';
import Footer from './footer';
import './diff.css';
import Admin from './admin';
import { FaAdjust, FaFeather, FaGreaterThan, FaStar } from 'react-icons/fa';
import img from './images/IMG-20221106-WA0014-removebg-preview.png';


// REVEAL POINT
window.addEventListener('scroll', reveal, true);
window.addEventListener('load', reveal, true);

function reveal() {
    const reveals = document.querySelectorAll('.each_section');
    for(var i = 0; i < reveals.length; i++){
        var top_view = reveals[i].getBoundingClientRect().top;
        var window_height = window.innerHeight;
        var reveal_point = 50;
        if(top_view < window_height - reveal_point){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

const handle = () => {
    setTimeout(() => {
        document.querySelector('.home').style.cssText = "opacity:1; transition:1s;";
        document.querySelector('.loader').style.cssText = "opacity:0; transition:1s;";
    }, 2000);
}

window.addEventListener('load',handle)

export default function Home(){
    return(
        
        <>
            
            <section className='fixed z-50 flex items-center justify-center w-screen h-screen overflow-hidden bg-red-900 loader opacity-1'>
                {/* <div className='absolute -right-[250px] -bottom-[150px]'><img src={img} alt="Kolawole" className='opacity-10'/></div> */}

                {/* Intro Loader */}
                <div className='des absolute w-[1000px] h-[1000px] rounded-full'></div>
                <div className='load_one absolute w-[20px] h-[100px] bg-white rounded-xl'></div>
                <div className='load_two absolute w-[30px] h-[100px] bg-white rounded-xl'></div>
            </section>
            <section className='home z-50 relative w-[100%] h-auto bg-slate-900 relative opacity-0'>
                {/* Redirector Arrow */}
                <a href="#about" className='arrow fixed z-50 bottom-[30px] right-[50px] p-3 rounded-full'>
                    <FaGreaterThan className='text-white -rotate-90' />    
                </a>
                <About />
                {/* <hr className='hidden border-2 border-gray-700 lg:block' /> */}
                <Skills />
                <Admin />
                <Projects />
                <br />
                <Contact />
                <Footer />
            </section> 
        </>
    )
}