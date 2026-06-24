import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const ProjectShowcase = () => { 

    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app 
        },
        {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.', 
            image: assets.work_fitness_app
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } 
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    }

  return (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id='our-work' 
        className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-48 pt-30 text-gray-700 dark:text-white'
    >
        <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl'>
            {
                workData.map((work, index) => (
                    <motion.div
                        variants={cardVariants}
                        key={work.title} 
                        className='hover:scale-[1.02] duration-300 transition-transform cursor-pointer' 
                    >
                        <img src={work.image} className='w-full rounded-xl object-cover' alt={work.title} />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 max-w-[85%]'>{work.description}</p>
                    </motion.div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default ProjectShowcase