import { useState } from 'react'
import React, { useContext } from 'react'
import {RxDot, RxDotFilled} from 'react-icons/rx'
import Nav from './Nav'
import Footer from './footer'
import img_1 from './images/localhost_3000_.png'
import img_2 from './images/localhost_3000_ (1).png'
import img_4 from './images/localhost_3000_ (d1).png'
import Contact from './contact'

const data = [
  img_1,
  img_2,
  img_4
]


export default function Portfolio(){
  const [control, setControl] = useState(0);
    if(control > 2){
      setControl(0);
    }else{
      setTimeout(() => {
        setControl(control + 1);
      }, 7000);
    }
  return (
    <section className='w-screen h-[fit-content] text-black bg-slate-900'>
      <Nav  />
      <div className='py-5 text-2xl text-center text-gray-200 pt-28 lg:pt-36'>
          Personal Website
      </div>
      <div className='h-[40vh] relative'>
        <div className='flex items-center project_banner h-[70%]' >
          <img src={data[control]} alt="" className='w-[90vw] lg:h-full mx-auto lg:w-[30vw]'/>
        </div>
        <div className='absolute flex justify-center w-full py-2 bottom-5 project-banner '> 
          {data.map((datum, i) => i === control ? <RxDotFilled color='white' /> : <RxDot color='white' />)}
        </div>
      </div>

      <div className='px-[45px] py-5 text-lg font-thin leading-8 tracking-widest text-white lg:w-[50vw] lg:text-center lg:mx-auto'>
      As a React developer proficient in building stunning and responsive web applications, I have recently developed a cutting-edge portfolio utilizing
       the power of React and the flexibility of Tailwind CSS. This portfolio showcases my skills, experience, and projects in a visually appealing and user-friendly manner.
        
        
      </div>
      <Contact />
      <Footer />
    </section>
  )
  
}
