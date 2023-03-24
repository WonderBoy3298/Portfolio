import React from 'react';
import linkedIn from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function SocialIcone(props) {
    return (
        <div className='flex justify-center my-10 gap-7 '>
            <a className='hover:opacity-50 transition duration-500'
            href='https://www.linkedin.com/in/hamza-alaoui-9170071bb/' 
            target="_blank"
            rel="noreferrer"
            >
                <img  src={linkedIn} alt="linkedIn photo"/>

            </a>
            <a className='hover:opacity-50 transition duration-500'
            href='https://github.com/WonderBoy3298?tab=repositories'
            target="_blank"
            rel="noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} size="2xl" /> 

            </a>
            <a className='hover:opacity-50 transition duration-500'
            href='https://www.facebook.com/hamza.alaoui.127201/'
            target="_blank"
            rel="noreferrer"
            >
                <img  src={facebook} alt="linkedIn photo"/>

            </a>
            <a className='hover:opacity-50 transition duration-500'
            href='https://www.instagram.com/wonderboy8016/?hl=fr'
            target="_blank"
            rel="noreferrer"
            >
                <img  src={instagram} alt="linkedIn photo"/>

            </a>
        </div>
    );
}

export default SocialIcone;