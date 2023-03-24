import React from 'react';
import About from './about';
import Skills from './skill'
import Projects from './project';
import Contact from './contact';
import Footer from './footer';
import './diff.css';

// REVEAL POINT
window.addEventListener('scroll', reveal, true);
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


export default function Home(){
    return(
        <>
            <section className='home w-[100%] h-auto bg-slate-900 relative absolute'>
                <About />
                {/* <hr className='border-2 border-gray-700 hidden lg:block' /> */}
                <Skills />
                <hr className='hidden border-2 lg:border-gray-700' />
                <Projects />
                <br />
                <hr className='hidden border-2 lg:border-gray-700' />
                <Contact />
                <Footer />
            </section>
        </>
    )
}