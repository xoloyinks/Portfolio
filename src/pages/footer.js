import React, { useState } from 'react';


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
      console.log(getFooter);
  },0);
  return (
    <>
        <section id='footer' className='w-screen sm:h-screen bg-slate-900 flex items-center z-50 px-[45px] py-[30px] sm:px-[100px]'>
            <div className='w-full flex flex-col justify-between h-full sm:h-auto'>
              <div className='sm:flex sm:justify-between sm:w-8/12  w-full mb-[80px] sm:mb-[70px] '>
                  <div className=''>
                      <h2 className='text-orange-400 text-xl tracking-[10px] leading-[50px]'>SAY HELLO</h2>
                      <p className='text-gray-500 text-lg leading-[50px] underline'><a href="">hello@kolawole.dev</a></p>
                      <p className='text-gray-500 text-lg leading-[50px] underline'><a href="#">t.me/mrkolawole</a></p>
                  </div>
                    <br className='sm:hidden' />
                  <div>
                    <br className='hidden sm:block' /><br className='hidden sm:block' />
                    <p className='text-white text-lg leading-[50px] '><a href="#">My Projects</a></p>
                    <p className='text-white text-lg leading-[50px] '><a href="#">My Skills</a></p>
                    <p className='text-white text-lg leading-[50px] '><a href="#">My R&#xe9;sum&#xe9;</a></p>
                  </div>
                <br />
              </div>
              <div className='text-white text-sm'>
                <hr className='border-[1px] border-gray-600 w-full' />
                <br />
                <span className='leading-[50px] tracking-widest opacity-80 flex items-center'><span className='font-bold text-xl'>&#xa9; </span> XOLO 2023</span>
              </div>
              
            </div>
        </section>
    </>
  )
}
