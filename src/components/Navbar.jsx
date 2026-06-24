import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navigation = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Services", href: "#services" },
        { name: "Our Work", href: "#our-work" },
        { name: "Contact Us", href: "#contact-us" }
    ];

  return (
    <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-md font-medium bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/10 dark:border-white/10 w-full"
    >
      <h2 className='text-2xl font-bold tracking-wide text-gray-900 dark:text-white flex items-center font-sans cursor-pointer'>
        Neural<span className='text-primary'>Forge</span>
      </h2>

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img 
            src={assets.close_icon} 
            alt="Close Menu" 
            className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer" 
            onClick={() => setSidebarOpen(false)} 
        />
        
        {navLinks.map((link) => (
            <a 
                key={link.name}
                onClick={() => setSidebarOpen(false)} 
                href={link.href} 
                className="sm:hover:text-primary dark:sm:hover:text-blue-400 transition-colors py-1"
            >
                {link.name}
            </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <img 
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
            alt="Open Menu" 
            onClick={() => setSidebarOpen(true)} 
            className="w-8 sm:hidden cursor-pointer"
        />
        
        <a 
            href="#contact-us" 
            className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-[1.03] transition-all"
        >
            Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navigation;