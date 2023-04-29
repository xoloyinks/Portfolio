import React from 'react'

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
        <section className='h-fit-content sm:h-screen py-10 px-10 w-screen lg:px-[150px] items-center'>
           <div className='admin sm:flex justify-between'>
              <div className='w-full sm:w-6/12 '>
                <div>
                    <h1 className='text-green-600 text-4xl sm:text-5xl'>About Me</h1>
                </div>
                <br />
                <div className='text-white leading-[30px] text-[15px] tracking-widest'>
                  I'm Kolawole Moses, a skilled Frontend developer. My interest in Web development started back in 
                  2018 when i decided to try an E-commerce website like "Jumia" - turns out 
                  building Responsive, Fast, and User centered websites taught me a lot about HTML, CSS and JavaScript!
                  <br /><br />
                  Fast-forward to today, i'm currently a third year student of <abbr title="Federal University of Technology Akure">FUTA </abbr>
                  studying Computer Science.
                  Here are a few technologies i've been working with recently:
                  <br />
                  <ul className='flex flex-wrap font-bold text-sm p-3 justify-between list-disc  opacity-70'>
                    <div>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>NPM</li>
                    </div>
                    <div>
                    <li>Tailwind CSS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    </div>
                  </ul>
                  <br />
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <div className='w-[250px] h-[250px] bg-white z-50 rounded-sm'>

                </div>
                <div className='absolute z-20 w-[250px] h-[250px] translate-y-[20px] translate-x-[20px] border-2 rounded-sm'></div>
              </div>
           </div>
        </section>
    </>
  )
}
