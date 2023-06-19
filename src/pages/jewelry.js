import { useState } from 'react'
import React, { useContext } from 'react'
import {RxDot, RxDotFilled} from 'react-icons/rx'
import Nav from './Nav'
import Footer from './footer'
import img_1 from './images/localhost_3000_11.png'
import img_2 from './images/localhost_3000_1.png'
// import img_3 from './images/localhost_3000_1s.png'
import img_4 from './images/localhost_300sa0_1.png'
import Contact from './contact'
// import img_5 from './images/localhost_3000dd_1.png'

const data = [
  img_1,
  img_2,
  // img_3,
  img_4
  // img_5
]

export default function Jewelry() {
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
      <Nav />
      <div className='py-8 text-2xl text-center text-gray-200 pt-28'>
          Jewelry Store
      </div>
      <div className='project_banner h-[40vh] relative'>
        <div className='flex items-center project_banner h-[70%]' >
          <img src={data[control]} alt="" className='w-[90vw] mx-auto'/>
        </div>
        <div className='absolute flex justify-center w-full py-2 bottom-7 project-banner '> 
          {data.map((datum, i) => i === control ? <RxDotFilled color='white' /> : <RxDot color='white' />)}
        </div>
      </div>

      <div className='px-8 py-5 text-lg font-thin leading-8 tracking-widest text-white'>
        The Jewelry store is an ecommerce website built by me to upgrade my Portfolio. <br /> <br />
        This site Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium beatae vero temporibus sapiente dolore natus debitis quae veritatis dolores fugiat, quos itaque rerum in unde, aut error nam at ipsa!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis itaque voluptatem dolor, veritatis numquam enim quidem, cupiditate exercitationem vitae eos praesentium sapiente perspiciatis ab iste blanditiis vel reprehenderit tempore. <br /><br />
        Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit saepe quod maiores itaque dicta provident fugiat nihil neque recusandae laborum, cumque, delectus adipisci illum tempore cum ut hic sint officiis!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nemo iusto, incidunt tempore sit aliquam qui molestiae mollitia autem doloremque eos nostrum. Earum doloremque voluptates veniam, ut optio quaerat minima!
        
        
      </div>
      <Contact />
      <Footer />
    </section>
  )
  
}
