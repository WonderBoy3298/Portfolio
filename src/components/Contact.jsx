import React from 'react';
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import person from '../assets/contact-image.jpeg'

function Contact(props) {


    const {register,trigger, formState : { errors },
        } = useForm();

    const onSubmit = async(e)=>{
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }

    }
    return (
        <section id="contact" className=' py-40'>
             <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full "
      >
        <div>
          <p className="font-playfair font-semibold text-[26px]  ss:text-[36px]">
            <span className="text-yellow ">CONTACT </span>ME 
          </p>
          
        </div>
      </motion.div>
    
        {/*  Image and form  */ }

        <div className=' md:flex md:justify-between gap-16 mt-5'>
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
             }}
            
            className='basis-1/2 flex justify-center'>

                <img src={person} alt="contact_Me" />


            </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >

          <form
          onSubmit={onSubmit}
          target="_blank"
          method="POST"
          action="https://formsubmit.co/0bcf77c8c368874485b67d6e0d5e8f2d"
          
          >

                <input className='w-full bg-blue p-3 bg-opaque-black font-semibold '
                type="text"
                placeholder='NAME'
                {...register(
                    "name",{
                        required:true,
                        maxLength:150
                    }
                )}
                
                />

                {errors.name && (
                    <p className='text-red mt-1'>
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type ==="maxLength" && "Max Length is 150 character"}
                    </p>
                    
                )}
             


                <input className='w-full bg-blue p-3 bg-opaque-black font-semibold mt-5'
                type="email"
                placeholder='EMAIL'
                {...register(
                    "email",{
                        required:true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    }
                )}
                
                />
                  {errors.email && (
                <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}


                <textarea className='w-full bg-blue p-3 bg-opaque-black font-semibold mt-5'
                type="text"
                placeholder='Message'
                rows="4"
                cols="50"

                {...register(
                    "message",{
                        required:true,
                        maxLength:2000
                    }
                )}
                
                />
                 {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

                <button className='p-3 ss:p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 '
                type='submit'
                >
                    SEND A MESSAGE
                </button>






          </form>



        </motion.div>

        </div>

        </section>
    );
}

export default Contact;