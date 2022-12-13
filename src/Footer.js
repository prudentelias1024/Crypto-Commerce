import {FaFacebook, FaInstagram, FaTwitter, FaDiscord} from 'react-icons/fa'
import { Link } from "react-router-dom";

const  Footer = ()=> {
  

    return (
       
        
        <div className="footer__container text-center bg-slate-900 py-16 md:p-28 text-white flex flex-col-reverse md:flex-row gap-10">
        <div className=" footer__community flex flex-col gap-12 w-full md:1/2">
        <p className="font-bold text-2xl md:text-4xl">
           Follow Us
        </p>
        <div className='flex flex-row md:gap-7 md:ml-28 gap-2 ml-[4em]'>
        <FaFacebook className='ml-5 text-5xl md:text-5xl'/>
        <FaInstagram className='text-5xl md:text-5xl'/>
        <FaTwitter className='text-5xl md:text-5xl'/>
        <FaDiscord className='text-5xl md:text-5xl'/>
        </div>
        <div className="text-white font-bold ">
            <p>All Rights Reserved</p>
        </div>
        </div>
        <div className="footer__actions w-full md:w-1/2 justify-center flex flex-col gap-3">
        <p className="font-bold text-2xl md:text-4xl mr-3 mb-9">
          Join Natively
        </p>
          <div className="flex flex-row gap-10 ml-16">
            <button className='self-center md:w-2/6 bg-[#512bd4] text-white px-8 py-3  rounded-md'>
              <Link to='/register'>
              Register
              </Link>
              </button>
            <button className='self-center md:w-2/6 border text-white px-6 py-3  rounded-md'>
            <Link to='/register'>
              Login
              </Link>
              </button>
          </div>
        </div>
        
        </div>
      
    )
}
export default Footer;