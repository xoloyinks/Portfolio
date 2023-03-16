import React from 'react';
import About from './about';
import Skills from './skill'
import Projects from './project';
import Contact from './contact';
import './diff.css';

var secondaryColor = '#0A2463';
var blobColor = '#374151';


export default function Home(){
    return(
        <>
            <section className='home w-[100%] h-auto bg-gray-800 relative absolute'>
                <About />
                <hr className='border-2 border-gray-700 hidden lg:block' />
                <Skills />
                <hr className='hidden border-2 lg:border-gray-700' />
                <Projects />
                <br />
                <hr className='hidden border-2 lg:border-gray-700' />
                <Contact />
            </section>
        </>
    )
}