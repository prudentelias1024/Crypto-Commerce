
import { FaCameraRetro, FaShareAlt, FaTrademark, FaHandshake,FaCoins, FaLock } from "react-icons/fa";
import Benefits from "./Benefits";
const Body = () => {
    // const toAnimateElement = document.querySelectorAll('.benefit');
    // const observer = new IntersectionObserver((entries) => {
    //     console.log(entries)
    //      entries.forEach((entry) => {
          
    //         if(entry.isIntersecting){
    //          entry.target.classList.add('show')
    //         } else {
    //          entry.target.classList.remove('show')
    //         }
    //      });
    //   });
    //   toAnimateElement.forEach((elem) => observer.observe(elem))
     
    return(
    <>
    <div id="services" className="quick__about flex flex-col mb-20">
        <div className="title">
            <p className="benefits__heading mt-24 mb-10 text-black text-5xl font-bold text-center ">
                Why Natively?
            </p>
        </div>
        <div className="benefits grid grid-cols-1 md:grid md:grid-cols-3 md:gap-2 md:ml-6">
        <Benefits Icons={FaCameraRetro} body="You don't have to complain of not being seen. The world can see you"/>
        <Benefits Icons={FaShareAlt} body="You get to show your works to the world as a creative Entrepreneur"/>
        <Benefits Icons={FaHandshake} body="We offer a platform to trade your creative works at your own price"/>
        <Benefits Icons={FaTrademark} body="You can trade your Products at the best affordable charges"/>
        <Benefits Icons={FaCoins} body="We take per sale charges not subscription"/>
        <Benefits Icons={FaLock} body="We ensure security in all payment transactions for our users"/>
      
        </div>
    </div>

    </>
    );
}
export default Body;