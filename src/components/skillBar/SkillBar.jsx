
import React, { useEffect, useState } from 'react';
import './Skillbar.css'


import { motion,useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
function SkillBar(props) {

    const animation = useAnimation()
    const {ref,inView}=useInView()
    
    useEffect(()=>{

        if(inView){
        animation.start({width:`${props.value}%`})
        console.log(`la valeur de in view ${inView}`)
        }
        console.log(inView)
    },[inView])
    return (
                            <div ref={ref} className=' mt-6'>
                                <p className='text-xl'>{props.name}</p>
                                <div className="progressbar">
                                    
                                    <motion.div className='bar'
                                    animate={animation}
                                    transition={{duration:2}}
                                    ></motion.div>
                                
                                </div>    

                            </div>
    );
}

export default SkillBar;