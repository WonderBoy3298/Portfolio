import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/UseMediaQuery';
import brush from '../assets/brush.png'
{/*import Typical from 'react-typical';*/}


function Home(props) {
   
    const isAboveMedium = useMediaQuery("(min-with:1060px)")
   
    return (
        <section id="home" className=' mt-[100px]' >
                {/* Main Section */}
            <div className='flex items-center  justify-center'>
                <div className='  w-6/6'>
                    <div className=' m-2  text-center'>
                            
                                    <div className='sm:text-9xl text-5xl  '>Hamza Alaoui</div> 
                                    <h3 className='   mt-11  text-center '>

                                        I DONT' USE DEBUGGERS  I STARE DOWN UNTIL THE CODE CONFESSES
                                        {/*<Typical
                                        wrapper='b'
                                        steps={[
                                            "I DONT' USE DEBUGGERS  I STARE DOWN UNTIL THE CODE CONFESSES",
                                            1000
                                        ]}
                                    />*/}

                                    </h3>
                            
                    </div>
                    
                    
                </div>

            </div>
            <div className=' flex items-center  justify-center '>
            <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 "
            onClick={() => props.setSelectedPage("contact")}
            href="#contact"
          >
                Contact Me
          </AnchorLink>
          <div
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5  h-12"
            
            
          >
                <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                <a href="https://bit.ly/405wDPR">Resume</a>
                </div>
          </div>
                
            </div>
        </section>
    );
}

export default Home;