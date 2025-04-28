import { useState } from "react";
import { motion } from "framer-motion";
const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-white bg-cover flex  justify-between items-center 
    gap-4 px-8 py-4 md:px-16">
      <img src="assets/images/logo.svg" alt="" className="w-[8rem] md:w-[12rem]" />
      <div className="flex-row justify-between items-center gap-4  
      md:flex  hidden">
        <motion.p  initial={{borderBottom: "none", borderColor: "transparent"}} 
              whileHover={{borderBottom: " 3px solid",
              borderColor: "var(--emerald)",
              color: "var(--space-cadet)"
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-[var(--cadet-gray)] cursor-pointer ">Home</motion.p>
        <motion.p   initial={{borderBottom: "none", borderColor: "transparent"}} 
              whileHover={{borderBottom: " 3px solid",
              borderColor: "var(--emerald)",
              color: "var(--space-cadet)"
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-[var(--cadet-gray)] cursor-pointer ">About</motion.p>
        <motion.p  initial={{borderBottom: "none", borderColor: "transparent"}} 
              whileHover={{borderBottom: " 3px solid",
              borderColor: "var(--emerald)",
              color: "var(--space-cadet)"
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-[var(--cadet-gray)] cursor-pointer ">Contact</motion.p>
        <motion.p   initial={{borderBottom: "none", borderColor: "transparent"}} 
              whileHover={{borderBottom: " 3px solid",
              borderColor: "var(--emerald)",
              color: "var(--space-cadet)"
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-[var(--cadet-gray)] cursor-pointer ">Blog</motion.p>
      </div>
      <button className="bg-linear-to-l to-[var(--emerald)] 
      hover:opacity-70 transition-all duration-300 hidden md:block
      from-[var(--verdigris)] text-white px-4 py-2 rounded-full ">Request Invite</button>
      <div className="flex md:hidden relative">
        <img src={isOpen ? "assets/images/icon-close.svg" : "assets/images/icon-hamburger.svg"} alt=""
          onClick={() => setIsOpen(!isOpen)} className="relative md:hidden" />
        {isOpen && (
          <motion.div 
          className="fixed top-12 left-0 w-full h-screen bg-linear-to-t to-[var(--space-cadet)]" onClick={() => setIsOpen(false)}>
            <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center bg-white
                 px-28 py-8 rounded-lg shadow-lg
                 absolute top-6 right-8
                 items-center gap-3 text-[var(--space-cadet)]">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
              <p>Blog</p>
              <p>Carrers</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Nav
