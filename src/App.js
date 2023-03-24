import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import useMediaQuery from './hooks/UseMediaQuery';
import Navbar from './components/Navbar';
import { motion } from "framer-motion";
import DotGroup from './components/Dotgroup'
import Home from './components/Home';
import SocialIcone from './components/socialIcone';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedPage,setselectedPage]=useState('home')
  const [isTopOfPage,setisTopOfPage]=useState(true)
  const isAboveSmallScreens = useMediaQuery("(min-width:700px)");
  console.log(isAboveSmallScreens)
  useEffect(()=>{
    const handleScroll =()=>{
        if(window.scrollY===0){
          setisTopOfPage(true)
        }else{
          setisTopOfPage(false)
        }
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>{ window.removeEventListener("scroll",handleScroll) }
  },[])
  return (
    
    <div className='app bg-deep-blue '>
      
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setselectedPage={setselectedPage}/>
     
      <Home setselectedPage={setselectedPage}/>
          <motion.div
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}  
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
        >

        <SocialIcone />


        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        >
            <Skills/>

        </motion.div>
        <Projects  />
        
        
        <Contact/>
        <Footer/>
        
    </div>
    
    

  );
}


export default App;
