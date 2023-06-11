import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/UseMediaQuery';
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import {Link} from 'react-scroll'

function Navbar(props) {
    const [ismenuToogled,setIsMenuToogled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:700px)");
    
   const navbarBackground = props.isTopOfPage ? "" : "bg-red"

    const Link =({page,selectedPage,setselectedPage})=>{
        const lowerCasePage = page.toLowerCase();
        return(
            <AnchorLink
                className={`${selectedPage === lowerCasePage ? "text-yellow":""}
                hover:text-yellow transition duration-500`}
                href={`#${lowerCasePage}`}
                onClick={()=>{setselectedPage(lowerCasePage)}}
            >
                {page}
            </AnchorLink>
        )


    }
    const [state,setstate]=useState("home")
    const navStyle = (value)=>{
        console.log(value)
    }
    

    
    return (
        <nav className={` ${navbarBackground} z-40 w-full sticky top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-2xl sm:text-3xl font-bold cursor-pointer hover:text-yellow transition duration-500 '><a href='https://github.com/WonderBoy3298'>&lt;Alaoui/&gt;</a></h4>
                    {/*   DESKTOP NAV  */}
                        
                        {isAboveSmallScreens ? (<div className='flex justify-between gap-10 msm:gap-16 font-opensans text-sm font-semibold'> 
                            <Link
                            page="Home"
                            selectedPage={props.selectedPage}
                            setselectedPage={props.setselectedPage}
                            />
                             <Link
                            page="Projects"
                            selectedPage={props.selectedPage}
                            setselectedPage={props.setselectedPage}
                            />
                             <Link
                            page="Skills"
                            selectedPage={props.selectedPage}
                            setselectedPage={props.setselectedPage}
                            />
                            
                            <a href='https://bit.ly/3NmWJJU' className='hover:text-yellow transition duration-500'>
                                Resume
                            </a>
                            <Link page="Contact"
                            setselectedPage={props.selectedPage}
                            selectedPage={props.selectedPage}
                            />

                            
                            
                        
                        </div>):(
                           
                            <button className='rounded-full bg-red p-2  ' onClick={()=>{setIsMenuToogled(!ismenuToogled)}}>
                                <img alt="menu" src={menu}/>
                            </button>
                           
                        )}
                        {/*   Mobile menu PoP UP  */}
                        {!isAboveSmallScreens && ismenuToogled && (

                                <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px] '>
                                    {/* ClOSE ICONE  */}
                                    <div className='flex justify-end p-12 ' >
                                        <button onClick={()=>{setIsMenuToogled(!ismenuToogled)}}>
                                            <img src={close} />
                                        </button>
                                        
                                    </div>
                                    <div className='flex flex-col gap-10 ml-[33%]  text-2xl text-deep-blue '>
                                            <Link
                                                page="Home"
                                                selectedPage={props.selectedPage}
                                                setselectedPage={props.setselectedPage}
                                            />
                                             <Link
                                                page="Projects"
                                                selectedPage={props.selectedPage}
                                                setselectedPage={props.setselectedPage}
                                            />
                                            <Link
                                                page="Skills"
                                                selectedPage={props.selectedPage}
                                                setselectedPage={props.setselectedPage}
                                            />
                                            <Link
                                                page="contact"
                                                selectedPage={props.selectedPage}
                                                setselectedPage={props.setselectedPage}
                                            />
                                            <a href='https://bit.ly/3NmWJJU' className='hover:text-yellow transition duration-500'>
                                                     Resume
                                            </a>
                                    </div>
                                </div>
                                    
                                    
                            )


                        }

                    
            </div>
        
        
        </nav>
    );
}

export default Navbar;
