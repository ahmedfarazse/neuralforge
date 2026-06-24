import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const SiteFooter = () => { 
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'> 
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'
        >
         
          <h2 className='text-2xl font-bold tracking-wide text-gray-900 dark:text-white flex items-center font-sans'>
            Neural<span className='text-primary'>Forge</span>
            {/* <span className='text-primary text-xs font-semibold ml-0.5 mb-2'>.ai</span> */}
          </h2>

          <p className='max-w-md'>
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
          <ul className='flex gap-8'>
            <li><a className='hover:text-primary transition-colors' href="#hero">Home</a></li>
            <li><a className='hover:text-primary transition-colors' href="#services">Services</a></li>
            <li><a className='hover:text-primary transition-colors' href="#our-work">Our work</a></li>
            <li><a className='hover:text-primary transition-colors' href="#contact-us">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400'
        >
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articles and resources, sent to your inbox weekly.</p>
          <form onSubmit={handleSubscribe} className='flex gap-2 text-sm'>
            <input 
              type="email" 
              placeholder='Enter your email.' 
              required
              className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'
            />
            <button type="submit" className='bg-primary text-white rounded px-6 cursor-pointer hover:opacity-90 transition-opacity'>
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6' />
      
      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>Copyright 2026 @ AhmedFaraz - All Right Reserved.</p>
        
        <div className='flex items-center justify-between gap-4'> 
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <img src={assets.twitter_icon} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <img src={assets.instagram_icon} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </a>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default SiteFooter