import {FaEllipsisH } from "react-icons/fa"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import web3 from 'web3';
import ProfilePic from './joke.png'

const Navbar = ({loggedIn}) => {
  const [walletAddress, setWalletAddress] = useState('');
  useEffect(()=>{
    console.log(walletAddress)
  },[])
  const loadWeb3 = async() => {  
      if (window.ethereum) {
        window.web3 = new web3(window.ethereum);
          await window.ethereum.enable();
        } else if(window.web3){
          window.web3 = new web3(window.web3.currentProvider); 
        } else {
          window.alert("Please install metamask");
        }
  
  }
  const connectWallet = async () => {
   let account = await window.ethereum.enable();
   console.log(account)
    setWalletAddress(account[0]);
 
  }
    return (
        <div className="flex nav md:flex w-full justify-between p-6 px-32 z-0">
        <div className="logo">
          <p className="app__name -ml-28 md:-ml-11 text-black font-bold text-2xl -mt-2 ">
          Natively
          </p>
        </div>
    
        <div className="link absolute right-4 ">
        <FaEllipsisH className="md:hidden" onClick={()=> {}} /> 
          <ul className="nav__link hidden md:flex gap-10 mt-1 -ml-10 font-bold ">
            <li><Link  to="/products">Products</Link></li>
            <li><a href="#services">Services</a></li>
           {!walletAddress?
           
           <li onClick={()=>{connectWallet()}} className="w-full bg-[#512bd4] text-white px-6 pl-3 ml-[-1.2em] mt-[-0.8em] mb-[1em]  rounded-full"><p className="p-[0.7em] align-center">Connect A Wallet</p></li>
           :<li><p>{walletAddress}</p></li>
           }
           {!loggedIn?
              <li><Link to="/login" className="w-full bg-[#2952e3] text-white px-12 py-3.5 -ml-2 mt-2.5 rounded-full">Login</Link></li>
            :            
           <li className="h-fit">
            <img  src={ProfilePic} className="mr-[5em] ml-[-1em] rounded-full w-[3em] h-[3em] object-cover  mt-[-.6em] "alt={ProfilePic}  />
           </li>
           }
          
                    </ul>
          </div>
        </div> 
    );

}
export default Navbar;