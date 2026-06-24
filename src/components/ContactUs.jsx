import React, { useState } from 'react' // useState import kiya hai
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const GetInTouch = () => { // Naam change kar diya

    const [result, setResult] = useState(""); // Comment hata diya hai

    const onsubmit = async (event) => {
        event.preventDefault();
        setResult("Sending..."); // User ko loading state dikhane ke liye
        
        const formData = new FormData(event.target);
        formData.append("access_key", "db9a21df-5cc4-4a78-b3dc-b617309d1f91");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        
        if (data.success) {
            setResult("Form Submitted Successfully!");
            event.target.reset(); // Form clear karne ke liye
        } else {
            setResult("Error! Something went wrong.");
        }
    }

  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{staggerChildren:0.2}}
        id='contact-us' 
        className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <motion.form
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5, delay:0.4}}
            viewport={{once:true}}
            onSubmit={onsubmit} 
            className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
        >
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                 <div className='flex pl-3 rounded-lg border border-gray-300'>
                    <img src={assets.person_icon} alt="Person Icon" />
                    <input name='name' type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none bg-transparent' required/>
                 </div>
            </div>
            
            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                 <div className='flex pl-3 rounded-lg border border-gray-300'>
                    <img src={assets.email_icon} alt="Email Icon" />
                    <input name='email' type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none bg-transparent' required/>
                 </div>
            </div>
            
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                {/* Name attribute ko massage se message kar diya hai */}
                <textarea name='message' rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required/>
            </div>
            
            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
                Submit <img src={assets.arrow_icon} alt="Arrow" className='w-4'/>
            </button>

            {/* User ko result show karwane ke liye */}
            {result && <p className='mt-4 text-sm font-medium text-center sm:col-span-2'>{result}</p>}

        </motion.form>
    </motion.div>
  )
}

export default GetInTouch