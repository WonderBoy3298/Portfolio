import React from 'react';
import SocialIcone from './socialIcone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEye,faEyeSlash,faCode,faHeart } from '@fortawesome/free-solid-svg-icons';

import { faGithub,faReact } from '@fortawesome/free-brands-svg-icons'



function Footer(props) {
    return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto ">
        <div className='flex justify-center sm:justify-start '>
        < SocialIcone/>
        </div>
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            <a href='https://github.com/WonderBoy3298?tab=repositories'>HAMZA ALAOUI</a>
          </p>
          <p className="font-playfair text-md text-yellow bold">
            ©2023 <a>WonderBoy</a>. <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> by Hamza Alaoui using     <FontAwesomeIcon icon={faReact} /> 
          </p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;