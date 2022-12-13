import Navbar from "./Navbar";
import ProfilePic from './hero.jpg'
 const  Hero = () => {
  
 return (
  <div className="hero">
    <Navbar/>
    <div className="md:flex flex-row">
      <div className="app__details md:p-20">
          <p className="app__title w-full px-4 text-4xl ml-3 md:text-5xl md:w-3/4">
           For Native Fashion Designers And Their Prospective Customers 
          </p>
          <p className="app__subtitle ml-4 px-4 py-1 md:w-2/3 font-bold text-3xl  mt-3">
          Showcase your creative works to the world. We help you find the best creative entrepreneurs and fashion designers near you. You don't have to break a sweat
          </p>
      </div>
      <div className="hero__image">
       <img  src={ProfilePic} className=" md:-ml-14 mt-2 w-full h-full object-cover" alt={ProfilePic}  />
       
      </div>
      </div>
  </div>
 )
}

export default Hero;