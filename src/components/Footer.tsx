import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[var(--space-cadet)] bg-cover bg-no-repeat grid  
    grid-cols-1  md:grid-cols-3 items-center j gap-4 p-8">
      <div className="flex justify-center items-center flex-col gap-4">
        <img src="assets/images/logoWhite.svg" alt="" />
        <div className="flex justify-center items-center">
        <FaFacebookSquare className="mx-2 text-2xl text-[var(--seasalt)] 
        hover:text-[var(--emerald)] transition-all duration-300"/>
        <IoLogoYoutube className="mx-2 text-2xl text-[var(--seasalt)] 
        hover:text-[var(--emerald)] transition-all duration-300"/>
        <FaTwitter className="mx-2 text-2xl text-[var(--seasalt)] 
        hover:text-[var(--emerald)] transition-all duration-300"/>
        <FaPinterest className="mx-2 text-2xl text-[var(--seasalt)] 
        hover:text-[var(--emerald)] transition-all duration-300"/>
        <FaInstagram className="mx-2 text-2xl text-[var(--seasalt)] 
        hover:text-[var(--emerald)] transition-all duration-300"/>
      </div>
      </div>
    
      <div  className="flex flex-col 
      md:flex-row justify-center items-center gap-1 md:gap-11">
        <div className="text-center md:text-left ">
        <p className="text-[var(--seasalt)] hover:text-[var(--emerald)] transition-all duration-300 cursor-pointer">About Us</p>
        <p className="text-[var(--seasalt)] hover:text-[var(--emerald)] transition-all duration-300 cursor-pointer">Contact</p>
        <p className="text-[var(--seasalt)] hover:text-[var(--emerald)] transition-all duration-300 cursor-pointer">Blog</p>
        </div>
        <div className="text-center md:text-left text-[var(--seasalt)]">
        <p className="text-[var(--seasalt)] hover:text-[var(--emerald)] transition-all duration-300 cursor-pointer">Careers</p>
        <p className="text-[var(--seasalt)] hover:text-[var(--emerald)] transition-all duration-300 cursor-pointer">Support</p>
        <p className="text-[var(--seasalt)] hover:text-[var(--emerald)] transition-all duration-300 cursor-pointer">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
      <button className="bg-linear-to-l to-[var(--emerald)] hover:opacity-70 transition-all duration-300
      from-[var(--verdigris)] text-white px-4 py-2 rounded-full ">Request Invite</button>
      <p className="text-[var(--cadet-gray)]"> © Easybank. All Rights Reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
