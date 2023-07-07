import React from 'react';
import {motion } from 'framer-motion';
import project from '../assets/project-1.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons'

const container ={
    hidden:{},
    visible:{
        transition:{ staggerChildren:0.2 }
    }
}

const projectVariant ={
    hidden:{opacity:0,scale:0.8},
    visible:{opacity:1,scale:1}

} 



const Project = ({title,text,live,url})=>{
   
    const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `
return(
    <motion.div  variants={projectVariant} className="relative">
        <div className={`${overlayStyles}  `}>
            <p className='text-2xl font-playfair'>{title}</p>
            <p className='mt-7 border border-green-600 w-[200px] '>
                {text}
            </p>
            <div className='flex  gap-3 justify-center  absolute bottom-[8px]'>
                
                <a className='' href={url} > <FontAwesomeIcon icon={faGithub} size="2xl" />  </a>
                {live ? < a className='' href='https://github.com/WonderBoy3298/BookingCopie' > <FontAwesomeIcon icon={faEye} size="2xl" /> </a> :
                < a className='' > <FontAwesomeIcon icon={faEyeSlash} size="2xl" /> </a> 
                }
            </div>
            
        </div>
        <img  src={project}   />

    </motion.div>
)    

} 


function Projects(props) {
    return (
        <section id="projects" className=' pb-48 pt-40 '>
            <motion.div
                    className="md:w-2/4 mx-auto text-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
            >
            <div>
            <p className="font-playfair font-semibold text-4xl mb-5">
             <span className="text-red">PRO</span>JECTS
          </p>

            </div>
          
         

          <p className="mt-10 mb-7">
         



          </p>
        </motion.div>        
          {/* Projects */}
        <div className='flex justify-center'>

        <motion.div
                    className="md:w-2/4 mx-auto text-center  sm:grid sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                
                    variants={container}
        >
            <Project title="Project 1" text=" Booking Clone with MERN Stack " live={true} url="https://github.com/WonderBoy3298/BookingCopie"/>
            <Project title="Project 2" text="An E-commerce Website build with Angular and spring-boot" live={false} url="https://github.com/WonderBoy3298/BookingCopie" />
            <Project title="Project 3" text="Netflix Clone with Mern Stack" live={true} url="https://github.com/WonderBoy3298/BookingCopie"/>
            <Project title="Project 4" text="simple web app for managing Pokémon using Angular" live={true} url="https://ng-pokemon-app-a02b7.web.app/login"/>
            

        </motion.div>

        </div>



        </section>
    );
}

export default Projects;
