import React, { useEffect, useState } from 'react';
import './Skills.css';
import { motion,useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import SkillBar from '../skillBar/SkillBar';
function Skills(props){

    const [technical,setTechnical]=useState(true)
    const [soft,setSoft]=useState(false)

    const [value,setvalue]=useState(0)
    const [name,setname] = useState(0)
  
 
   
    const {ref,inView}=useInView()

    useEffect(()=>{

        if(inView){
            
        console.log(`la valeur de in view ${inView}`)

        }
        
    },[inView])
    const handleClick1 =()=>{
        setTechnical(true)
        setSoft(false)
    }
    const handleClick2 = ()=>{
        setTechnical(false)
        setSoft(true)
    }
    return (
        <section id="skills">
            <div className='flex justify-center  mt-52'>
            <div className='container   '>
                <h1 className='text-center  text-2xl mus:text-5xl'>Skills</h1>
                <div className=' mt-11   '>
                    <nav className=' us:flex grid      justify-center items-center text-1xl mus:text-3xl  gap-0' >
                        <a className=' flex-1   us:text-[20px] xs:text-[25px] ss:text-[32px]    text-center hover:text-red cursor-pointer transition duration-700' onClick={handleClick1} >Technical Skills</a>
                        <a className='  flex-1  us:text-[20px] xs:text-[25px]  ss:text-[32px]  text-center hover:text-red cursor-pointer transition duration-700' onClick={handleClick2} >Soft Skills</a>
                    </nav>
                
                </div>

              {technical && !soft && 
                <div className='  flex justify-center mt-5'>
                <div ref={ref} className="container   w-[80%]    sm:flex justify-center mt-5  skill-secion ">
                    <div className='right  flex-1  '>
                           
                            <SkillBar value={90} name={"React"}/>
                            <SkillBar value={60} name={"Angular"}/>
                            <SkillBar value={80} name={"Html/Css"}/>
                            <SkillBar value={65} name={"Tailwind"}/>
                            
                           
                          
                    </div>
                    <div className='left flex-1  sm:ml-10 '>
                   
                            <SkillBar value={90} name={"Java"}/>
                            <SkillBar value={60} name={"Express"}/>
                            <SkillBar value={80} name={"C/C#"}/>
                            <SkillBar value={65} name={"SQL"}/>
                           

                    </div>

                </div>



                </div>
              }
              



            {!technical && soft &&
                <div className='  flex justify-center mt-5'>
                <div ref={ref} className="container   w-[80%]    sm:flex justify-center mt-5  skill-secion ">
                    <div className='right  flex-1  '>
                           
                            <SkillBar value={70} name={"Communication"}/>
                            <SkillBar value={60} name={"Adaptability"}/>
                            <SkillBar value={70} name={"Creativity"}/>
                            <SkillBar value={85} name={"Collaboration"}/>
                            
                           
                          
                    </div>
                    <div className='left flex-1  sm:ml-10 '>
                   
                            <SkillBar value={45} name={"Positivity"}/>
                            <SkillBar value={95} name={"Problem Solving"}/>
                            <SkillBar value={72} name={"Organization"}/>
                            <SkillBar value={45} name={"Project Management"}/>
                           

                    </div>

                </div>



                </div>
            }
              



            </div>
        </div>


        </section>
    );
}

export default Skills;