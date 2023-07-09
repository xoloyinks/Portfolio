import React from 'react'
import admin from './images/selfie_two.jpg'

window.addEventListener('scroll', revealPoint_admin, true);
function revealPoint_admin(){
    var revealed_admin = document.querySelector('.admin');
    var revealedTop_admin = revealed_admin.getBoundingClientRect().top;

    if(revealedTop_admin < window.innerHeight - 50){
        revealed_admin.classList.add('present_admin')
    }else{
        revealed_admin.classList.remove('present_admin')
    }
}
export default function Admin(){
  return (
    <>
        <section id='admin' className='h-fit-content overflow-x-hidden sm:h-screen py-10 px-10 w-screen md:px-[100px] md:h-[fit-content] lg:h-[fit-content] xl:h-screen lg:px-[150px] min-[1366px]:h-[fit-content] items-center'>
           <div className='justify-between admin sm:flex md:block lg:flex'>
              <div className='w-full sm:w-6/12 md:w-full lg:w-6/12'>
                <div>
                    <h1 className='text-green-600 text-4xl max-[380px]:text-3xl sm:text-5xl'>About Me</h1>
                </div>
                <br />
                <div className='text-white leading-[30px] text-[15px] tracking-widest max-[380px]:text-sm '>
                  I'm Kolawole Moses, a skilled Frontend Engineer. My interest in Web development started back in 
                  2020 when i came across a Text book on JavaScript after nearly 2 years of experience coding in Python - turns out 
                  my interest in the Web grew as i dived deep into JavaScript and it's libraries and Frameworks!
                  <br /><br />
                  Fast-forward to today, i'm currently open to new experience and opportunities.
                  Here are a few technologies i've been working with recently:
                  <br />
                  <ul className='flex flex-wrap justify-between p-3 text-sm font-bold list-disc opacity-70 md:w-9/12'>
                    <div>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>NPM</li>
                    </div>
                    <div>
                    <li>Tailwind CSS</li>
                    <li>TypeScript</li>
                    <li>Next JS</li>
                    </div>
                  </ul>
                  <br />
                </div>
              </div>

              {/* ADMIN IMAGE */}
              <div className='flex items-center justify-center'>
                <div className='w-[250px] h-[250px] overflow-hidden bg-white z-50 rounded-xl  max-[380px]:w-[200px] max-[380px]:h-[200px] '>
                    <img src={admin} alt="" />
                </div>
                <div className='absolute z-20 w-[250px] h-[250px] translate-y-[20px] translate-x-[20px] border-green-600 border-2 rounded-xl opacity-20 max-[380px]:w-[200px] max-[380px]:h-[200px] '></div>
              </div>
           </div>
        </section>
    </>
  )
}
