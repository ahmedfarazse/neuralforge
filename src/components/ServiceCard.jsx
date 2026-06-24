import React, { useRef, useState } from 'react'
import { motion } from "motion/react"

const GlowCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
     
    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const bounds = divRef.current.getBoundingClientRect(); 
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 cursor-pointer' 
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)} 
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
        <div 
          className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-40' : 'opacity-0'}`} 
          style={{ top: position.y - 150, left: position.x - 150 }} 
        />

        <div className='flex items-center gap-10 p-8 rounded-[10px] bg-white dark:bg-gray-900 z-10 relative hover:bg-white/90 dark:hover:bg-gray-900/90 transition-colors duration-300 h-full'>
            <div className='bg-gray-100 dark:bg-gray-700 rounded-full shrink-0'>
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className='max-w-20 bg-white dark:bg-gray-900 rounded-full m-2 p-2' 
                />
            </div>
            <div className='flex-1'>
                <h3 className='font-bold text-gray-800 dark:text-white'>{service.title}</h3>
                <p className='text-sm mt-2 text-gray-600 dark:text-gray-400 leading-relaxed'>{service.description}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default GlowCard