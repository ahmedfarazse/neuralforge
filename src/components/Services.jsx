import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import GlowCard from "./ServiceCard"; 
import { motion } from "motion/react"

const CoreOfferings = () => { // Component ka naam change kar diya

    const servicesData = [
        {
            title: 'Advertising', 
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...', 
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        }
    ]

  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        id='services' 
        className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
        {/* -z-1 ko z-[-1] kiya standard format ke liye */}
        <img src={assets.bgImage2} alt="Background Pattern" className='absolute -top-110 -left-70 z-[-1] dark:hidden' />

        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mt-4'>
            {servicesData.map((service, index) => (
                <GlowCard key={service.title} service={service} index={index} /> 
            ))}
        </div>

    </motion.div>
  )
}

export default CoreOfferings