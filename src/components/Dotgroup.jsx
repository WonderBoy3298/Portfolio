import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function DotGroup(props) {

    const selectedStyle = `relative bg-yellow  before:absolute
    before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] `;

    const selectedStyle2 =`relative bg-dark-gray`

    console.log(`DotGroup ${props.selectedPage}`)

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
           
           <AnchorLink className={`${props.selectedPage === "home" ? selectedStyle : selectedStyle2 } w-3 h-3 rounded-full `}
           href="#home"
           onClick={()=>{props.setselectedPage("home")}}
           ></AnchorLink>

            <AnchorLink className={`${props.selectedPage === "Projects" ? selectedStyle : selectedStyle2 } w-3 h-3 rounded-full  `}
           href="#Projects"
           onClick={()=>{props.setselectedPage("Projects")}}
           ></AnchorLink>

            <AnchorLink className={`${props.selectedPage === "skills" ? selectedStyle : selectedStyle2} w-3 h-3 rounded-full  `}
           href="#Skills"
           onClick={()=>{props.setselectedPage("skills")}}
           ></AnchorLink>

            <AnchorLink className={`${props.selectedPage === "Resume" ? selectedStyle : selectedStyle2} w-3 h-3 rounded-full  `}
           href="#Resume"
           onClick={()=>{props.setselectedPage("Resume")}}
           ></AnchorLink>
             
             <AnchorLink className={`${props.selectedPage === "Contact" ? selectedStyle : selectedStyle2} w-3 h-3 rounded-full `}
           href="#Contact"
           onClick={()=>{props.setselectedPage("Contact")}}
           ></AnchorLink>
           


        </div>
    );
}

export default DotGroup;