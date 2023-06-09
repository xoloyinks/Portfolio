import React, { useState } from 'react';

const secColor = "green-600";

export default function Footer() {
  const [getFooter , setFooter] = useState();

  setTimeout(function(){
      const footers = document.getElementById('footer');
      const docuHeight = document.documentElement.scrollHeight;
      window.addEventListener('scroll', () => {
        setFooter(footers.getBoundingClientRect().top);
      }, true);
      if(getFooter < 100){
        document.getElementById('poll-socials').style.cssText = "transform:translate(800px,-5px); overflow-x:visible;";
        document.getElementById('icon-socials').style.cssText = "display:flex; flex-direction:row; width:90px; heigth:auto; transition: all 1s; color:white;";
        document.getElementById('poll').style.cssText = "opacity:0; transition:all 1s;";
      }else{
        document.getElementById('poll').style.cssText = "opacity:10; transition:all 1s;";
        document.getElementById('icon-socials').style.cssText = "flex-direction:column; overflow-x:hidden; transition: all 1s; color:#f97316;";
        document.getElementById('poll-socials').style.cssText = "transform:translateY(0px); transition:all 0.5s;";
      }
      // console.log(getFooter);
  },0);
  return (
    <>
        <section id='footer' className='w-screen sm:h-screen bg-slate-900 flex items-center z-50 px-[45px] py-[30px] sm:px-[100px] md:h-[fit-content] lg:h-[40%] xl:h-screen  min-[1366px]:h-[fit-content]'>
            <div className='flex flex-col justify-between w-full h-full sm:h-auto'>
              <div className='sm:flex sm:justify-between sm:w-8/12  w-full mb-[80px] sm:mb-[70px] md:w-full lg:w-full xl:w-8/12'>
                  <div className=''>
                      <h2 className={`text-${secColor} text-xl tracking-[10px] leading-[50px]`}>SAY HELLO</h2>
                      <p className='text-gray-500 text-lg leading-[50px] underline'><a href="mailto:xoloyinks@gmail.com" target="_blank">xoloyinks@gmail.com</a></p>
                      <p className='text-gray-500 text-lg leading-[50px] underline'><a href="https://t.me/xoloyinks" target="_blank">t.me/xoloyinks</a></p>
                  </div>
                    <br className='sm:hidden' />
                  <div>
                    <br className='hidden sm:block' /><br className='hidden sm:block' />
                    <p className='text-white text-lg leading-[50px] '><a href="#project">My Works</a></p>
                    <p className='text-white text-lg leading-[50px] '><a href="#admin">About Me</a></p>
                    <p className='text-white text-lg leading-[50px] '><a href="/resume/Resume-Kolawole-Omopariola.pdf" download>My R&#xe9;sum&#xe9;</a></p>
                  </div>
                <br />
              </div>
              <div className='text-sm text-white'>
                <hr className='border-[1px] border-gray-600 w-full' />
                <br />
                <span className='leading-[50px] tracking-widest opacity-80 flex items-center'><span className='text-xl font-bold'>&#xa9; </span> XOLO 2023. All rights reserved</span>
              </div>
              
            </div>
        </section>
    </>
  )
}
